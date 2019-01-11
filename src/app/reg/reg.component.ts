import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {User} from '../models/user';
import {Account} from '../models/account';
import {Router} from '@angular/router';
import {Role} from '../models/role';
import {AuthService} from '../services/auth.service';
import {CompositeModel} from '../models/composite.model';

@Component({
  moduleId: module.id,
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  user: User = new User();
  account: Account = new Account();
  confirmPassword = '';
  loading = false;
  error = '';
  model: CompositeModel = new CompositeModel();

  constructor(private title: Title,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.title.setTitle('Регистрация');
  }

  signUp() {
    this.loading = true;
    if (this.account.password !== this.confirmPassword) {
      this.error = 'Пароли не совпадают';
      this.loading = false;
      return;
    }

    const role = new Role();
    role.roleName = 'ROLE_USER';
    this.account.user = this.user;
    this.account.role = role;
    this.model.user = this.user;
    this.model.account = this.account;
    this.model.role = role;


    this.authService.signUp(this.model)
      .then(() => {
        localStorage.setItem('currentUser', JSON.stringify({
          username: this.account.userName,
          role: this.account.role,
          date: new Date().toString()
        }));
        this.router.navigate(['/']);
      }, error => {
        this.loading = false;
        this.error = error;
      });
  }
}

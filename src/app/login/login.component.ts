import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Account} from '../models/account';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: Account;
  loading = false;
  error = '';

  constructor(private title: Title,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Вход на сайт');
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.account)
      .then(
        (result: boolean) => {
          if (result) {
            localStorage.setItem('currentUser', JSON.stringify({
              username: this.account.userName,
              role: this.account.role,
              date: new Date().toString()
            }));
            this.router.navigate(['/']);
          } else {
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        }, error => {
          this.loading = false;
          this.error = error;
        }
      );
  }
}

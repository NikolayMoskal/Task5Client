import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../app.config';
import {Account} from '../models/account';
import {CompositeModel} from '../models/composite.model';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  async signUp(model: CompositeModel) {
    return await this.http.post(AppConfig.APP_SERVER_URL + '/api/Auth/SignUp', model, {headers: this.headers}).toPromise();
  }

  login(account: Account) {
    return this.http.post(AppConfig.APP_SERVER_URL + '/api/Auth/SignIn', account, {headers: this.headers}).toPromise();
  }

  getUserName(): string {
    const json = localStorage.getItem('currentUser');
    const currentUser = json ? JSON.parse(json) : null;
    return currentUser ? currentUser.username : '';
  }

  hasRole(role: string): boolean {
    const json = localStorage.getItem('currentUser');
    const currentUser = json ? JSON.parse(json) : null;
    const storedRole = currentUser ? currentUser.role : '';
    return storedRole === role;
  }

  getDate(): Date {
    const json = localStorage.getItem('currentUser');
    const currentUser = json ? JSON.parse(json) : null;
    return currentUser ? new Date(currentUser.date) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    const ms: number = +new Date() - +this.getDate();
    return ms < 1000 * 60 * 60;
  }
}

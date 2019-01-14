import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../app.config';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeeService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  async getAllEmployees(filter?: Employee) {
    return this.http.post<Employee[]>(AppConfig.APP_SERVER_URL + 'api/Employee/All', filter, {headers: this.headers}).toPromise();
  }
}

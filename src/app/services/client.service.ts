import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../app.config';
import {Client} from '../models/client';

@Injectable()
export class ClientService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  async getAllClients(): Promise<Client[]> {
    return this.http.get<Client[]>(AppConfig.APP_SERVER_URL + 'api/Client/All', {headers: this.headers}).toPromise();
  }
}

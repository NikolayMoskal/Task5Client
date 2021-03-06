import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../app.config';
import {Booking} from '../models/booking';

@Injectable()
export class BookingService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  async getAllBookings(filter?: Booking): Promise<Booking[]> {
    return this.http.post<Booking[]>(AppConfig.APP_SERVER_URL + 'api/Booking/All', filter, {headers: this.headers}).toPromise();
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../../app.config';

@Injectable()
export class BookingService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getAllBookings(): Observable<any> {
    return this.http.get(AppConfig.APP_SERVER_URL + '/api/Booking/All', {headers: this.headers});
  }
}

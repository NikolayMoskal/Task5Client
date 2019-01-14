import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {
  static readonly APP_SERVER_URL = 'http://localhost:49523/';
  static readonly ALL_CLIENTS = 'api/Client/All';
  static readonly ALL_BOOKINGS = 'api/Booking/All';
  static readonly ALL_EMPLOYEES = 'api/Employee/All';
  static readonly ALL_PRODUCTS = 'api/Product/All';
}

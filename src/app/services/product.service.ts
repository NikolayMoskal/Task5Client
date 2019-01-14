import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../app.config';
import {Product} from '../models/product';

@Injectable()
export class ProductService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  async getAllProducts(filter?: Product): Promise<Product[]> {
    return this.http.post<Product[]>(AppConfig.APP_SERVER_URL + 'api/Product/All', filter, {headers: this.headers}).toPromise();
  }
}

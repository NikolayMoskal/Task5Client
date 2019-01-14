import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {AuthService} from '../services/auth.service';
import {Title} from '@angular/platform-browser';
import {BookingService} from '../services/booking.service';
import {ProductService} from '../services/product.service';
import {Booking} from '../models/booking';
import {AppConfig} from '../../app.config';

declare var google: any;

@Component({
  moduleId: module.id,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  element: string;
  products: Product[];
  testModel: Product = new Product();

  constructor(private authService: AuthService,
              private title: Title,
              private productService: ProductService,
              private bookingService: BookingService) {
  }

  async ngOnInit() {
    this.title.setTitle('Task5 Home Page');

    this.element = 'employee-booking-chart';
    const columns = {
      legend: 'Legend',
      values: 'Values'
    };
    const options = {
      title: 'Статистика количества заказов с данным товаром',
      pieHole: 0.4
    };
    const elementId = this.element;

    this.products = await this.productService.getAllProducts(this.testModel);
    const filter: Booking = new Booking();
    filter.product = this.testModel;
    const bookings: Booking[] = await this.bookingService.getAllBookings(filter);

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(function () {
      $.ajax({
        url: AppConfig.APP_SERVER_URL + AppConfig.ALL_PRODUCTS,
        dataType: 'json',
        method: 'post',
        success: function (json: Product[]) {
          const list = [];
          json.forEach(item => list.push([item.name, bookings.filter(value => value.product.name === item.name).length]));
          list.unshift([columns.legend, columns.values]);
          const datatable = google.visualization.arrayToDataTable(list);
          const chart = new google.visualization.PieChart(document.getElementById(elementId));
          chart.draw(datatable, options);
        }
      });
    });

    this.products.forEach(item => item.bookings = bookings.filter((value) => value.product.name === item.name));
  }

  async filter() {
    this.products = await this.productService.getAllProducts(this.testModel);
    const filter: Booking = new Booking();
    filter.product = this.testModel;
    const bookings: Booking[] = await this.bookingService.getAllBookings(filter);
    this.products.forEach(item => item.bookings = bookings.filter((value) => value.product.name === item.name));
  }
}

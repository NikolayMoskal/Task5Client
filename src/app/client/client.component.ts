import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Title} from '@angular/platform-browser';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking';
import {Client} from '../models/client';
import {ClientService} from '../services/client.service';
import {AppConfig} from '../../app.config';

declare var google: any;

@Component({
  moduleId: module.id,
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  element: string;
  clients: Client[];
  testModel: Client = new Client();

  constructor(private authService: AuthService,
              private title: Title,
              private bookingService: BookingService,
              private clientService: ClientService) {
  }

  async ngOnInit() {
    this.title.setTitle('Task5 Home Page');

    this.element = 'client-booking-chart';
    const columns = {
      legend: 'Legend',
      values: 'Values'
    };
    const options = {
      title: 'Статистика количества заказов на клиента',
      pieHole: 0.4
    };
    const elementId = this.element;

    this.clients = await this.clientService.getAllClients(this.testModel);
    const filter: Booking = new Booking();
    filter.client = this.testModel;
    const bookings: Booking[] = await this.bookingService.getAllBookings(filter);

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(function () {
      $.ajax({
        url: AppConfig.APP_SERVER_URL + AppConfig.ALL_CLIENTS,
        dataType: 'json',
        method: 'post',
        success: function (json: Client[]) {
          const list = [];
          json.forEach(item => list.push([item.name, bookings.filter(value => value.client.name === item.name).length]));
          list.unshift([columns.legend, columns.values]);
          const datatable = google.visualization.arrayToDataTable(list);
          const chart = new google.visualization.PieChart(document.getElementById(elementId));
          chart.draw(datatable, options);
        }
      });
    });
    this.clients.forEach(item => item.bookings = bookings.filter((value) => value.client.name === item.name));
  }

  async filter() {
    this.clients = await this.clientService.getAllClients(this.testModel);
    const filter: Booking = new Booking();
    filter.client = this.testModel;
    const bookings: Booking[] = await this.bookingService.getAllBookings(filter);
    this.clients.forEach(item => item.bookings = bookings.filter((value) => value.client.name === item.name));
  }
}

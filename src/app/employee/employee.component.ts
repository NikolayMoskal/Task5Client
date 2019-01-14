import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee';
import {AuthService} from '../services/auth.service';
import {Title} from '@angular/platform-browser';
import {EmployeeService} from '../services/employee.service';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking';
import {AppConfig} from '../../app.config';

declare var google: any;

@Component({
  moduleId: module.id,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  element: string;
  employees: Employee[];
  testModel: Employee = new Employee();

  constructor(private authService: AuthService,
              private title: Title,
              private employeeService: EmployeeService,
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
      title: 'Статистика количества заказов на менеджера',
      pieHole: 0.4
    };
    const elementId = this.element;

    this.employees = await this.employeeService.getAllEmployees(this.testModel);
    const filter: Booking = new Booking();
    filter.employee = this.testModel;
    const bookings: Booking[] = await this.bookingService.getAllBookings(filter);

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(function () {
      $.ajax({
        url: AppConfig.APP_SERVER_URL + AppConfig.ALL_EMPLOYEES,
        dataType: 'json',
        method: 'post',
        success: function (json: Employee[]) {
          const list = [];
          json.forEach(item => list.push([item.name, bookings.filter(value => value.employee.name === item.name).length]));
          list.unshift([columns.legend, columns.values]);
          const datatable = google.visualization.arrayToDataTable(list);
          const chart = new google.visualization.PieChart(document.getElementById(elementId));
          chart.draw(datatable, options);
        }
      });
    });

    this.employees.forEach(item => item.bookings = bookings.filter((value) => value.employee.name === item.name));
  }

  async filter() {
    this.employees = await this.employeeService.getAllEmployees(this.testModel);
    const filter: Booking = new Booking();
    filter.employee = this.testModel;
    const bookings: Booking[] = await this.bookingService.getAllBookings(filter);
    this.employees.forEach(item => item.bookings = bookings.filter((value) => value.employee.name === item.name));
  }
}

import {ClientService} from '../services/client.service';
import {Component, OnInit} from '@angular/core';
import {ChartConfig} from '../chart/chart.config';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClientService]
})
export class HomeComponent implements OnInit {

  data: any[];
  config: ChartConfig;
  element: string;

  constructor() {
  }

  async ngOnInit() {
    this.config = new ChartConfig('Статистика количества заказов на клиента', 0.4);
    this.element = 'chart1';
  }
}

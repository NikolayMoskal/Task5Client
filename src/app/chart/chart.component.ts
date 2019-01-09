import {Component, Input, OnInit} from '@angular/core';
import {ChartConfig} from './chart.config';
import {ChartService} from '../services/chart.service';

@Component({
  moduleId: module.id,
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  providers: [ChartService]
})
export class ChartComponent implements OnInit {
  @Input() data: any[];
  @Input() config: ChartConfig;
  @Input() elementId: string;

  constructor(private chartService: ChartService) {
  }

  ngOnInit(): void {
    this.chartService.drawChart(this.elementId, this.config);
  }
}

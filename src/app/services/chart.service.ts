import {Injectable} from '@angular/core';
import {ChartBaseService} from './chart-base.service';
import {ChartConfig} from '../chart/chart.config';
import {AppConfig} from '../../app.config';

declare var google: any;

@Injectable()
export class ChartService extends ChartBaseService {
  constructor() {
    super();
  }

  public drawChartWithData(elementId: string, config: ChartConfig, data: any[]): void {
    const chartFunc = () => new google.visualization.PieChart(document.getElementById(elementId));
    const options = {
      title: config.chartTitle,
      pieHole: config.chartHole,
    };

    this.buildChart(data, chartFunc, options);
  }

  public drawChart(elementId: string, config: ChartConfig): void {
    const chartFunc = () => new google.visualization.PieChart(document.getElementById(elementId));
    const options = {
      title: config.chartTitle,
      pieHole: config.chartHole,
    };
    const columns = {
      legend: 'Legend',
      values: 'Values'
    };
    this.buildChartFromUrl(AppConfig.APP_SERVER_URL + 'api/Client/All', chartFunc, columns, options);
  }
}

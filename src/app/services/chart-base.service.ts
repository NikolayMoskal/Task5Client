declare var google: any;

export class ChartBaseService {
  constructor() {
    google.charts.load('current', {'packages': ['corechart']});
  }

  protected buildChart(data: any[], chartFunc: any, options: any): void {
    google.charts.setOnLoadCallback(() => {
      const datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    });
  }

  protected buildChartFromUrl(dataUrl: string, chartFunc: any, columns: any, options: any): void {
    google.charts.setOnLoadCallback(function () {
      $.ajax({
        url: dataUrl,
        dataType: 'json',
        method: 'get',
        success: function (json) {
          const list = [];
          for (const i in json) {
            if (json.hasOwnProperty(i)) {
              list.push([json[i].name, json[i].bookings.length]);
            }
          }
          list.unshift([columns.legend, columns.values]);
          const datatable = google.visualization.arrayToDataTable(list);
          chartFunc().draw(datatable, options);
        }
      });
    });
  }
}

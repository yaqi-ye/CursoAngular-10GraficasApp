import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];

  public doughnutChartData: ChartData<'doughnut'> = {

    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 50 ],
        backgroundColor: [
          '#F55781',
          '#DCB9F5',
          '#AFF5AB',
          '#C7F5E2',
        ] }
    ]

  };

  public doughnutChartType: ChartType = 'doughnut';

}

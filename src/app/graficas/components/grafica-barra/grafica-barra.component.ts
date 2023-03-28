import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartDataset, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html'
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    ChartDataLabels
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { 
        data: [ 65, 59, 80, 81, 56, 55, 40 ], 
        label: 'Series A', 
        backgroundColor: '#C09AF5',
        hoverBackgroundColor: '#A45BF4' 
      },
      { 
        data: [ 28, 48, 40, 19, 86, 27, 90 ], 
        label: 'Series B', 
        backgroundColor: '#BBEAF5',
        hoverBackgroundColor: '#34F4DB' 
      },
      { 
        data: [ 8, 38, 70, 59, 66, 80, 100 ], 
        label: 'Series C', 
        backgroundColor: '#F5BAE7',
        hoverBackgroundColor: '#E06EF5' 
      }
    ] as ChartDataset<'bar'>[]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnInit(): void{
    //if ( this.horizontal ) {
    //  this.barChartType = true ;
    //}
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ]

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ]

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ]

    this.chart?.update();
  }
  
}

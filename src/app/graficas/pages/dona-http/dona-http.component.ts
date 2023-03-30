import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {

    labels: this.doughnutChartLabels,
    datasets: [
      { data: [],
        backgroundColor: [
          '#F55781',
          '#DCB9F5',
          '#AFF5AB',
          '#C7F5E2',
        ] }
    ]

  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasSevice: GraficasService ) { }

  ngOnInit(): void {
    /*
    this.graficasSevice.getUsuariosRedesSociales()
        .subscribe( data => {
          const labels = Object.keys( data );
          const values = Object.values( data );
          this.doughnutChartData = {
            labels: Object.keys( data ),
            datasets: [{data: Object.values( data )}]
          } 
        })
    */

    this.graficasSevice.getUsuariosRRSSDonaData()
        .subscribe( ({ labels, values }) => {
          this.doughnutChartData = {
            labels: Object.keys( this.doughnutChartLabels = labels ),
            datasets: [{ data: Object.values( values ) }]
          }
        })
  }

}

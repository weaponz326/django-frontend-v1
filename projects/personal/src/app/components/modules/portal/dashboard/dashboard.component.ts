import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/portal/dashboard" },
  ];

  allRinkOutCount: number = 0;
  allRinkInCount: number = 0;

  rinksLineChartData: ChartDataSets[] = [{ data: [0], label: 'Rink In' }, { data: [0], label: 'Rink Out' }];
  rinksLineChartLabels: Label[] = [""];
  rinkInGlobalData: any[] = [];
  rinkOutGlobalData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRinkOutCount();
    this.getRinkInCount();
    this.getRinkOutAnnotation();
    this.getRinkInAnnotation();
  }

  getRinkOutCount(){
    this.portalApi.getCounts("Rink Out")
      .subscribe(
        res => {
          console.log(res);
          this.allRinkOutCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getRinkInCount(){
    this.portalApi.getCounts("Rink In")
      .subscribe(
        res => {
          console.log(res);
          this.allRinkInCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getRinkInAnnotation(){
    this.portalApi.getAnnotation("Rink In")
      .subscribe(
        res => {
          console.log(res);
          this.setRinkLineChartLabels(res);
          this.setRinkInChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getRinkOutAnnotation(){
    this.portalApi.getAnnotation("Rink Out")
      .subscribe(
        res => {
          console.log(res);
          this.setRinkLineChartLabels(res);
          this.setRinkOutChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setRinkLineChartLabels(data: any){
    this.rinksLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.rinksLineChartLabels.push(data[x].date);
    }
    console.log(this.rinksLineChartLabels);
  }

  setRinkInChartData(data: any){
    let rawRinkInData = [];
    for(let x = 0; x < data.length; x++){
      rawRinkInData.push(data[x].count);
    }
    console.log(rawRinkInData);

    this.rinkInGlobalData = rawRinkInData;
    this.rinksLineChartData = [
      { data: this.rinkOutGlobalData, label: 'Rink In' },
      { data: rawRinkInData, label: 'Rink Out' }
    ];
  }

  setRinkOutChartData(data: any){
    let rawRinkOutData = [];
    for(let x = 0; x < data.length; x++){
      rawRinkOutData.push(data[x].count);
    }
    console.log(rawRinkOutData);

    this.rinkOutGlobalData = rawRinkOutData;
    this.rinksLineChartData = [
      { data: rawRinkOutData, label: 'Rink In' },
      { data: this.rinkInGlobalData, label: 'Rink Out' }
    ];
  }

  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        beginAtZero: true,
        min: 0,
        ticks: {
          stepSize: 1
        }
      }]
    }
  };

}

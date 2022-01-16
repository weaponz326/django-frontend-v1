import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/menu/dashboard" },
  ];

  allMenuGroupsCount: number = 0;
  allMenuItemsCount: number = 0;

  doughnutChartLabels: Label[] = [''];
  doughnutChartData: ChartDataSets[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getMenuGroupsCount();
    this.getMenuItemsCount();
    this.getItemGroupAnnotation();
  }

  getMenuGroupsCount(){
    this.menuApi.getCounts("Menu Group")
      .subscribe(
        res => {
          console.log(res);
          this.allMenuGroupsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getMenuItemsCount(){
    this.menuApi.getCounts("Menu Item")
      .subscribe(
        res => {
          console.log(res);
          this.allMenuItemsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getItemGroupAnnotation(){
    this.menuApi.getAnnotation("MenuItem")
      .subscribe(
        res => {
          console.log(res);
          // this.setDoughnutChartLabels(res);
          // this.setDoughnutChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  chartOptions = {
    responsive: true,
    // scales: {
    //   yAxes: [{
    //     beginAtZero: true,
    //     min: 0,
    //     ticks: {
    //       stepSize: 1
    //     }
    //   }]
    // }
  };

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

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
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
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

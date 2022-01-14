import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/tasks/dashboard" },
  ];

  allTaskGroupsCount: number = 0;
  allTaskItemsCount: number = 0;

  taskGroupsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Task Groups' }];
  taskGroupsLineChartLabels: Label[] = [""]
  taskItemsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Task Items' }];
  taskItemsLineChartLabels: Label[] = [""]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTaskGroupsCount();
    this.getTaskItemsCount();
    this.getTaskGroupAnnotation();
    this.getTaskItemAnnotation();
  }

  getTaskGroupsCount(){
    this.tasksApi.getCounts("Task Group")
      .subscribe(
        res => {
          console.log(res);
          this.allTaskGroupsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTaskItemsCount(){
    this.tasksApi.getCounts("Task Item")
      .subscribe(
        res => {
          console.log(res);
          this.allTaskItemsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTaskGroupAnnotation(){
    this.tasksApi.getAnnotation("Task Group")
      .subscribe(
        res => {
          console.log(res);
          this.setTaskGroupChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTaskItemAnnotation(){
    this.tasksApi.getAnnotation("Task Item")
      .subscribe(
        res => {
          console.log(res);
          this.setTaskItemChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setTaskGroupChartData(data: any){
    this.taskGroupsLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.taskGroupsLineChartLabels.push(data[x].date);
    }
    console.log(this.taskGroupsLineChartLabels);

    let rawTaskGroupData = [];
    for(let x = 0; x < data.length; x++){
      rawTaskGroupData.push(data[x].count);
    }
    console.log(rawTaskGroupData);
    this.taskGroupsLineChartData = [{ data: rawTaskGroupData, label: 'Task Groups' }];
  }

  setTaskItemChartData(data: any){
    this.taskItemsLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.taskItemsLineChartLabels.push(data[x].date);
    }
    console.log(this.taskItemsLineChartLabels);

    let rawTaskItemData = [];
    for(let x = 0; x < data.length; x++){
      rawTaskItemData.push(data[x].count);
    }
    console.log(rawTaskItemData);
    this.taskItemsLineChartData = [{ data: rawTaskItemData, label: 'Task Items' }];
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

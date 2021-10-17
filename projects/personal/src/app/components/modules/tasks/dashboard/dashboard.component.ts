import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('connectionPromptComponentReference') connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/tasks/dashboard" },
  ];

  allTaskGroupsCount: number = 0;
  allTaskItemsCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTaskGroupsCount();
    this.getTaskItemsCount();
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
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
        }
      )
  }

}

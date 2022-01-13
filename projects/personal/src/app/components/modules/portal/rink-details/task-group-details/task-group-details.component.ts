import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-task-group-details',
  templateUrl: './task-group-details.component.html',
  styleUrls: ['./task-group-details.component.scss']
})
export class TaskGroupDetailsComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  taskGroupData: any;
  taskItemsGridData: any[] = [];

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;
    sessionStorage.setItem("personal_taskGroup_id", source_id);

    this.getTaskGroup();
    this.getTaskItems();
  }

  getTaskGroup(){
    this.tasksApi.getSingleTaskGroup()
      .subscribe(
        res => {
          console.log(res);
          this.taskGroupData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTaskItems(){
    this.tasksApi.getTasks()
      .subscribe(
        res => {
          console.log(res);
          this.taskItemsGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

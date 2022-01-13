import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-task-item-details',
  templateUrl: './task-item-details.component.html',
  styleUrls: ['./task-item-details.component.scss']
})
export class TaskItemDetailsComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  taskItemData: any;

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;

    this.getTaskItem(source_id);
  }

  getTaskItem(source_id: any){
    this.tasksApi.getSingleTask(source_id)
      .subscribe(
        res => {
          console.log(res);
          this.taskItemData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

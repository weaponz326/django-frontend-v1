import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';


@Component({
  selector: 'app-view-task-group',
  templateUrl: './view-task-group.component.html',
  styleUrls: ['./view-task-group.component.scss']
})
export class ViewTaskGroupComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  navHeading: any[] = [
    { text: "View Task Group", url: "/home/tasks/view-task-group" },
  ];

  taskGroupForm: FormGroup = new FormGroup({});

  taskGroupFormData: any[] = [];

  isTaskGroupSaving: boolean = false;

  ngOnInit(): void {
    this.initTaskGroupForm();
  }

  ngAfterViewInit(): void {
    this.getTaskGroup();
  }

  initTaskGroupForm(){
    this.taskGroupForm = new FormGroup({
      taskGroupName: new FormControl('')
    })
  }

  getTaskGroup(){
    this.tasksApi.getSingleTaskGroup()
      .subscribe(
        res => {
          console.log(res);
          this.taskGroupForm.controls.taskGroupName.setValue(res.task_group);
        },
        err => {
          console.log(err);
        }
      )
  }

  putTaskGroup(){
    let data = {
      user: localStorage.getItem('personal_id'),
      task_roup: this.taskGroupForm.controls.taskGroupName.value
    }

    console.log(data);
    this.isTaskGroupSaving = true;

    this.tasksApi.putTaskGroup(data)
      .subscribe(
        res => {
          console.log(res);
          this.isTaskGroupSaving = false;
        },
        err => {
          console.log(err);
          this.isTaskGroupSaving = false;
        }
      )
  }

}

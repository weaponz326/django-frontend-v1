import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';


@Component({
  selector: 'app-new-task-group',
  templateUrl: './new-task-group.component.html',
  styleUrls: ['./new-task-group.component.scss']
})
export class NewTaskGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private tasksApi: TasksApiService
  ) { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  taskGroupForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initTaskForm();
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  initTaskForm(){
    this.taskGroupForm = new FormGroup({
      taskGroupName: new FormControl('')
    })
  }

  postTaskGroup(){
    let data = {
      user: localStorage.getItem('personal_id'),
      task_group: this.taskGroupForm.controls.taskGroupName.value
    }

    console.log(data);

    this.tasksApi.postTaskGroup(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('personal_task_group_id', res.id);
            this.router.navigateByUrl('/home/tasks/view-task-group/kanban-view');
          }
        },
        err => {
          console.log(err);
        }
      )
  }


}

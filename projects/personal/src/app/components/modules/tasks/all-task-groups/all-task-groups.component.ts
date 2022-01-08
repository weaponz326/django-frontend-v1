import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { TasksPrintService } from 'projects/personal/src/app/services/printing/tasks-print/tasks-print.service';

import { NewTaskGroupComponent } from '../new-task-group/new-task-group.component'


@Component({
  selector: 'app-all-task-groups',
  templateUrl: './all-task-groups.component.html',
  styleUrls: ['./all-task-groups.component.scss']
})
export class AllTaskGroupsComponent implements OnInit {

  constructor(
    private router: Router,
    private tasksApi: TasksApiService,
    private tasksPrint: TasksPrintService
  ) { }

  @ViewChild('newTaskGroupComponentReference', { read: NewTaskGroupComponent, static: false }) newTaskGroup!: NewTaskGroupComponent;

  navHeading: any[] = [
    { text: "All Task Groups", url: "/home/tasks/all-task-groups" },
  ];

  taskGroupsGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTaskGroups();
  }

  getTaskGroups(){
    this.tasksApi.getTaskGroups()
      .subscribe(
        res => {
          console.log(res);
          this.taskGroupsGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  viewTaskGroup(id: any){
    console.log(id);
    sessionStorage.setItem('personal_task_group_id', id);

    this.router.navigateByUrl('/home/tasks/view-task-group/kanban-view')
  }

  onPrint(){
    console.log("lets start printing...");
    this.tasksPrint.printAllTaskGroups(this.taskGroupsGridData);
  }

}

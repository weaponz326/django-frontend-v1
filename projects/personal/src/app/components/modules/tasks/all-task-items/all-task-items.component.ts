import { Component, OnInit, ViewChild } from '@angular/core';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { TasksPrintService } from 'projects/personal/src/app/services/printing/tasks-print/tasks-print.service';

import { AllTaskItemsPrintComponent } from 'projects/personal/src/app/components/printing/tasks-print/all-task-items-print/all-task-items-print.component'


@Component({
  selector: 'app-all-task-items',
  templateUrl: './all-task-items.component.html',
  styleUrls: ['./all-task-items.component.scss']
})
export class AllTaskItemsComponent implements OnInit {

  constructor(
    private tasksApi: TasksApiService,
    private tasksPrint: TasksPrintService
  ) { }

  @ViewChild('allTaskItemsPrintComponentReference', { read: AllTaskItemsPrintComponent, static: false }) allTaskItemsPrint!: AllTaskItemsPrintComponent;

  navHeading: any[] = [
    { text: "All Task Items", url: "/home/tasks/all-task-items" },
  ];

  taskItemsGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllTaskItems();
  }

  getAllTaskItems(){
    this.tasksApi.getAllTaskItems()
      .subscribe(
        res => {
          console.log(res);
          this.taskItemsGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.tasksPrint.printAllTaskItems(this.taskItemsGridData);
  }

}

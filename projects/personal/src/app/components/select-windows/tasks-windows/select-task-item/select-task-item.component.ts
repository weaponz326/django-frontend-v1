import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-task-item',
  templateUrl: './select-task-item.component.html',
  styleUrls: ['./select-task-item.component.scss']
})
export class SelectTaskItemComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @Output() taskItemSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  taskItemsGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getTaskItems();
    this.openButton.nativeElement.click();
  }

  getTaskItems(){
    this.tasksApi.getAllTaskItems()
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

  selectRow(row: any){
    this.taskItemSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}

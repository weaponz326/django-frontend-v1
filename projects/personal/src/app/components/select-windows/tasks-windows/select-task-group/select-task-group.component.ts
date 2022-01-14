import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-task-group',
  templateUrl: './select-task-group.component.html',
  styleUrls: ['./select-task-group.component.scss']
})
export class SelectTaskGroupComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @Output() taskGroupSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  taskGroupsGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getTaskGroups();
    this.openButton.nativeElement.click();
  }

  getTaskGroups(){
    this.tasksApi.getTaskGroups(1, 15, "")
      .subscribe(
        res => {
          console.log(res);
          this.taskGroupsGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.taskGroupSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}

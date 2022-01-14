import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


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
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('taskItemSortingComponentReference', { read: TableSortingComponent, static: false }) taskItemSorting!: TableSortingComponent;
  @ViewChild('prioritySortingComponentReference', { read: TableSortingComponent, static: false }) prioritySorting!: TableSortingComponent;
  @ViewChild('statusSortingComponentReference', { read: TableSortingComponent, static: false }) statusSorting!: TableSortingComponent;

  taskItemsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getAllTaskItems(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getAllTaskItems(page: any, size: any, sortField: any){
    this.tasksApi.getAllTaskItems(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.taskItemsGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
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

  sortTable(field: any){
    console.log(field);
    this.getAllTaskItems(1, 20, field);

    if((field == 'taskItem') || (field == "-taskItem")){
      this.prioritySorting.resetSort();
      this.statusSorting.resetSort();
    }
    else if((field == 'priority') || (field == "-priority")){
      this.taskItemSorting.resetSort();
      this.statusSorting.resetSort();
    }
    else if((field == 'status') || (field == "-status")){
      this.taskItemSorting.resetSort();
      this.prioritySorting.resetSort();
    }
  }

}

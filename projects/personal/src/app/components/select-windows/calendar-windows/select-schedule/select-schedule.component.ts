import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-select-schedule',
  templateUrl: './select-schedule.component.html',
  styleUrls: ['./select-schedule.component.scss']
})
export class SelectScheduleComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @Output() scheduleSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('scheduleNameSortingComponentReference', { read: TableSortingComponent, static: false }) scheduleNameSorting!: TableSortingComponent;
  @ViewChild('startDateSortingComponentReference', { read: TableSortingComponent, static: false }) startDateSorting!: TableSortingComponent;
  @ViewChild('endDateSortingComponentReference', { read: TableSortingComponent, static: false }) endDateSorting!: TableSortingComponent;
  @ViewChild('statusSortingComponentReference', { read: TableSortingComponent, static: false }) statusSorting!: TableSortingComponent;

  scheduleGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getAllSchedules(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getAllSchedules(page: any, size: any, sortField: any){
    this.calendarApi.getAllSchedules(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.scheduleGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any){
    console.log(field);
    this.getAllSchedules(1, 20, field);

    if((field == 'schedule_name') || (field == "-schedule_name")){
      this.startDateSorting.resetSort();
      this.endDateSorting.resetSort();
      this.statusSorting.resetSort();
    }
    else if((field == 'start_date') || (field == "-start_date")){
      this.scheduleNameSorting.resetSort();
      this.endDateSorting.resetSort();
      this.statusSorting.resetSort();
    }
    else if((field == 'end_date') || (field == "-end_date")){
      this.scheduleNameSorting.resetSort();
      this.startDateSorting.resetSort();
      this.statusSorting.resetSort();
    }
    else if((field == 'status') || (field == "-status")){
      this.scheduleNameSorting.resetSort();
      this.startDateSorting.resetSort();
      this.endDateSorting.resetSort();
    }
  }

  selectRow(row: any){
    this.scheduleSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}

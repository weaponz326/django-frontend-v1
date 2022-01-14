import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-select-calendar',
  templateUrl: './select-calendar.component.html',
  styleUrls: ['./select-calendar.component.scss']
})
export class SelectCalendarComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @Output() calendarSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('calendarNameSortingComponentReference', { read: TableSortingComponent, static: false }) calendarNameSorting!: TableSortingComponent;
  @ViewChild('createdAtSortingComponentReference', { read: TableSortingComponent, static: false }) createdAtSorting!: TableSortingComponent;

  calendarGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getCalendars(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getCalendars(page: any, size: any, sortField: any){
    this.calendarApi.getCalendars(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.calendarGridData = res.results;
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
    this.getCalendars(1, 10, field);

    if((field == 'calendar_name') || (field == "-calendar_name")){
      this.createdAtSorting.resetSort();
    }
    else if((field == 'created_at') || (field == "-created_at")){
      this.calendarNameSorting.resetSort();
    }
  }

  selectRow(row: any){
    this.calendarSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}

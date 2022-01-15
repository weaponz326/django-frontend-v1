import { Component, OnInit, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { CalendarPrintService } from 'projects/personal/src/app/services/printing/calendar-print/calendar-print.service';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrls: ['./all-schedules.component.scss']
})
export class AllSchedulesComponent implements OnInit {

  constructor(
    private calendarApi: CalendarApiService,
    private calendarPrint: CalendarPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('scheduleNameSortingComponentReference', { read: TableSortingComponent, static: false }) scheduleNameSorting!: TableSortingComponent;
  @ViewChild('startDateSortingComponentReference', { read: TableSortingComponent, static: false }) startDateSorting!: TableSortingComponent;
  @ViewChild('endDateSortingComponentReference', { read: TableSortingComponent, static: false }) endDateSorting!: TableSortingComponent;
  @ViewChild('statusSortingComponentReference', { read: TableSortingComponent, static: false }) statusSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Schedules", url: "/home/calendar/all-schedules" },
  ];

  schedulesGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllSchedules(1, 20, "");
  }

  getAllSchedules(page: any, size: any, sortField: any){
    this.calendarApi.getAllSchedules(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.schedulesGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        err => {
          this.connectionToast.openToast();
          console.log(err);
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

  onPrint(){
    console.log("lets start printing...");
    this.calendarPrint.getPrintSchedules(this.totalItems);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { CalendarPrintService } from 'projects/personal/src/app/services/printing/calendar-print/calendar-print.service';

import { NewCalendarComponent } from '../new-calendar/new-calendar.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-calendars',
  templateUrl: './all-calendars.component.html',
  styleUrls: ['./all-calendars.component.scss']
})
export class AllCalendarsComponent implements OnInit {

  constructor(
    private router: Router,
    private calendarApi: CalendarApiService,
    private calendarPrint: CalendarPrintService,
  ) { }

  @ViewChild('newCalendarComponentReference', { read: NewCalendarComponent, static: false }) newCalendar!: NewCalendarComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('calendarNameSortingComponentReference', { read: TableSortingComponent, static: false }) calendarNameSorting!: TableSortingComponent;
  @ViewChild('createdAtSortingComponentReference', { read: TableSortingComponent, static: false }) createdAtSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Calendars", url: "/home/calendar/all-calendars" },
  ];

  calendarGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCalendars(1, 50, "");
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
        }
      )
  }

  viewCalendar(id: any){
    console.log(id);
    sessionStorage.setItem('personal_calendar_id', id);

    this.router.navigateByUrl('/home/calendar/view-calendar')
  }

  sortTable(field: any){
    console.log(field);
    this.getCalendars(1, 50, field);

    if((field == 'calendar_name') || (field == "-calendar_name")){
      this.createdAtSorting.resetSort();
    }
    else if((field == 'created_at') || (field == "-created_at")){
      this.calendarNameSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
    this.calendarPrint.printAllCalendars(this.calendarGridData);
  }

}

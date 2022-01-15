import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarPageComponent } from './calendar-page.component';
import { ViewCalendarComponent } from '../../../components/modules/calendar/view-calendar/view-calendar.component';
import { DashboardComponent } from '../../../components/modules/calendar/dashboard/dashboard.component';
import { AllCalendarsComponent } from '../../../components/modules/calendar/all-calendars/all-calendars.component';
import { NewCalendarComponent } from '../../../components/modules/calendar/new-calendar/new-calendar.component';
import { AllSchedulesComponent } from '../../../components/modules/calendar/all-schedules/all-schedules.component';

import { ViewCalendarGuard } from '../../../guards/modules/calendar/view-calendar.guard';


const routes: Routes = [
  {
    path: "",
    component: CalendarPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-calendars", component: AllCalendarsComponent },
      { path: "new-calendar", component: NewCalendarComponent },
      { path: "view-calendar", component: ViewCalendarComponent, canActivate: [ViewCalendarGuard] },
      { path: "all-schedules", component: AllSchedulesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarPageRoutingModule { }

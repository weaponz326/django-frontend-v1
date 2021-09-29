import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarPageComponent } from './calendar-page.component';
import { ViewCalendarComponent } from '../../../components/modules/calendar/view-calendar/view-calendar.component';
import { AllAppointmentsComponent } from '../../../components/modules/calendar/all-appointments/all-appointments.component';
import { DashboardComponent } from '../../../components/modules/calendar/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: CalendarPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "view-calendar", component: ViewCalendarComponent },
      { path: "all-appointments", component: AllAppointmentsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarPageRoutingModule { }

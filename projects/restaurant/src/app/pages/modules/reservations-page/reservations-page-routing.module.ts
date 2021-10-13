import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationsPageComponent } from './reservations-page.component';
import { DashboardComponent } from '../../../components/modules/reservations/dashboard/dashboard.component';
import { AllReservationsComponent } from '../../../components/modules/reservations/all-reservations/all-reservations.component';
import { NewReservationComponent } from '../../../components/modules/reservations/new-reservation/new-reservation.component';
import { EditReservationComponent } from '../../../components/modules/reservations/edit-reservation/edit-reservation.component';


const routes: Routes = [
  {
    path: "",
    component: ReservationsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-reservations", component: AllReservationsComponent },
      { path: "new-reservation", component: NewReservationComponent },
      { path: "edit-reservation", component: EditReservationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsPageRoutingModule { }

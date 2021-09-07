import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllGuestsComponent } from './all-guests/all-guests.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';
import { GuestFormComponent } from './guest-form/guest-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllGuestsComponent,
    NewGuestComponent,
    ViewGuestComponent,
    GuestFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestsModule { }

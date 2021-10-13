import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { CustomersWindowsModule } from '../../select-windows/customers-windows/customers-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllReservationsComponent,
    NewReservationComponent,
    EditReservationComponent,
    ReservationFormComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    DateTimePickerModule,
    NumericTextBoxModule,
    DropDownListModule,
    ModuleUtilitiesModule,
    CustomersWindowsModule,
  ]
})
export class ReservationsModule { }

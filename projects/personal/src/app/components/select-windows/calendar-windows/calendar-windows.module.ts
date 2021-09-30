import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';



@NgModule({
  declarations: [
    SelectAppointmentComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectAppointmentComponent
  ]
})
export class CalendarWindowsModule { }

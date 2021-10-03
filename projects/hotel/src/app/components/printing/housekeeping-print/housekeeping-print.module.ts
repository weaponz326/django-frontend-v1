import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHousekeepingPrintComponent } from './all-housekeeping-print/all-housekeeping-print.component';
import { ViewHousekeepingPrintComponent } from './view-housekeeping-print/view-housekeeping-print.component';



@NgModule({
  declarations: [
    AllHousekeepingPrintComponent,
    ViewHousekeepingPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HousekeepingPrintModule { }

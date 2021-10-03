import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRosterPrintComponent } from './all-roster-print/all-roster-print.component';
import { ViewRosterPrintComponent } from './view-roster-print/view-roster-print.component';



@NgModule({
  declarations: [
    AllRosterPrintComponent,
    ViewRosterPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RosterPrintModule { }

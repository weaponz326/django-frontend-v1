import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGroupsPrintComponent } from './all-groups-print/all-groups-print.component';
import { ViewGroupPrintComponent } from './view-group-print/view-group-print.component';



@NgModule({
  declarations: [
    AllGroupsPrintComponent,
    ViewGroupPrintComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GroupsPrintModule { }

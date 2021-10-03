import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllWardsPrintComponent } from './all-wards-print/all-wards-print.component';
import { ViewWardPrintComponent } from './view-ward-print/view-ward-print.component';



@NgModule({
  declarations: [
    AllWardsPrintComponent,
    ViewWardPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WardsPrintModule { }

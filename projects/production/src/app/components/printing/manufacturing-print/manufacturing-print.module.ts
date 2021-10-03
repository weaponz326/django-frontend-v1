import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllManufacturingPrintComponent } from './all-manufacturing-print/all-manufacturing-print.component';
import { ViewManufacturingPrintComponent } from './view-manufacturing-print/view-manufacturing-print.component';



@NgModule({
  declarations: [
    AllManufacturingPrintComponent,
    ViewManufacturingPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManufacturingPrintModule { }

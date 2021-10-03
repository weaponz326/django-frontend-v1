import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllServicesPrintComponent } from './all-services-print/all-services-print.component';
import { ViewServicePrintComponent } from './view-service-print/view-service-print.component';



@NgModule({
  declarations: [
    AllServicesPrintComponent,
    ViewServicePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesPrintModule { }

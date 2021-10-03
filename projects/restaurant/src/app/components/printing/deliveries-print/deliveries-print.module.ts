import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDeliveriesPrintComponent } from './all-deliveries-print/all-deliveries-print.component';
import { ViewDeliveryPrintComponent } from './view-delivery-print/view-delivery-print.component';



@NgModule({
  declarations: [
    AllDeliveriesPrintComponent,
    ViewDeliveryPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeliveriesPrintModule { }

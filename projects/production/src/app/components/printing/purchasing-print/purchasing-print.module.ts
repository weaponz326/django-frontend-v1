import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPurchasingPrintComponent } from './all-purchasing-print/all-purchasing-print.component';
import { ViewPurchasingPrintComponent } from './view-purchasing-print/view-purchasing-print.component';



@NgModule({
  declarations: [
    AllPurchasingPrintComponent,
    ViewPurchasingPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PurchasingPrintModule { }

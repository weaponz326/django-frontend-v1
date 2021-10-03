import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllInventoryPrintComponent } from './all-inventory-print/all-inventory-print.component';
import { ViewInventoryPrintComponent } from './view-inventory-print/view-inventory-print.component';



@NgModule({
  declarations: [
    AllInventoryPrintComponent,
    ViewInventoryPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryPrintModule { }

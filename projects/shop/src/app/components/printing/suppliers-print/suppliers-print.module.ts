import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSuppliersPrintComponent } from './all-suppliers-print/all-suppliers-print.component';
import { ViewSupplierPrintComponent } from './view-supplier-print/view-supplier-print.component';



@NgModule({
  declarations: [
    AllSuppliersPrintComponent,
    ViewSupplierPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuppliersPrintModule { }

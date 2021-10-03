import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDrugsPrintComponent } from './all-drugs-print/all-drugs-print.component';
import { ViewDrugPrintComponent } from './view-drug-print/view-drug-print.component';



@NgModule({
  declarations: [
    AllDrugsPrintComponent,
    ViewDrugPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DrugsPrintModule { }

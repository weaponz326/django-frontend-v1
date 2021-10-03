import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllContractorsPrintComponent } from './all-contractors-print/all-contractors-print.component';
import { ViewContractorPrintComponent } from './view-contractor-print/view-contractor-print.component';



@NgModule({
  declarations: [
    AllContractorsPrintComponent,
    ViewContractorPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractorsPrintModule { }

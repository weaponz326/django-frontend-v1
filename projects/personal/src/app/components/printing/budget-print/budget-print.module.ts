import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBudgetPrintComponent } from './all-budget-print/all-budget-print.component';
import { ViewBudgetPrintComponent } from './view-budget-print/view-budget-print.component';



@NgModule({
  declarations: [
    AllBudgetPrintComponent,
    ViewBudgetPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BudgetPrintModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintAllBudgetComponent } from './print-all-budget/print-all-budget.component';
import { PrintViewBudgetComponent } from './print-view-budget/print-view-budget.component';



@NgModule({
  declarations: [
    PrintAllBudgetComponent,
    PrintViewBudgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BudgetPrintingModule { }

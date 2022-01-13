import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectBudgetComponent } from './select-budget/select-budget.component';


@NgModule({
  declarations: [
    SelectBudgetComponent
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectBudgetComponent
  ]
})
export class BudgetWindowsModule { }

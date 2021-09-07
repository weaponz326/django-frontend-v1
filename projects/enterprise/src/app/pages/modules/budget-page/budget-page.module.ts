import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPageRoutingModule } from './budget-page-routing.module';
import { BudgetPageComponent } from './budget-page.component';


@NgModule({
  declarations: [
    BudgetPageComponent
  ],
  imports: [
    CommonModule,
    BudgetPageRoutingModule
  ]
})
export class BudgetPageModule { }

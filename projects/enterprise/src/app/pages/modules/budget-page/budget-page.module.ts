import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPageRoutingModule } from './budget-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { BudgetPageComponent } from './budget-page.component';


@NgModule({
  declarations: [
    BudgetPageComponent
  ],
  imports: [
    CommonModule,
    BudgetPageRoutingModule,
    MainNavbarModule,
  ]
})
export class BudgetPageModule { }

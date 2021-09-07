import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllProcurementComponent } from './all-procurement/all-procurement.component';
import { NewProcurementComponent } from './new-procurement/new-procurement.component';
import { ViewProcurementComponent } from './view-procurement/view-procurement.component';
import { ProcurementFormComponent } from './procurement-form/procurement-form.component';
import { OrderReviewComponent } from './order-review/order-review.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllProcurementComponent,
    NewProcurementComponent,
    ViewProcurementComponent,
    ProcurementFormComponent,
    OrderReviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProcurementModule { }

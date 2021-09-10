import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { CreateFeesComponent } from './create-fees/create-fees.component';
import { ViewFeesComponent } from './view-fees/view-fees.component';
import { FeesFormComponent } from './fees-form/fees-form.component';
import { FeesItemsComponent } from './fees-items/fees-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddArrearsComponent } from './add-arrears/add-arrears.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { StudentBillComponent } from './student-bill/student-bill.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllFeesComponent,
    CreateFeesComponent,
    ViewFeesComponent,
    FeesFormComponent,
    FeesItemsComponent,
    AddItemComponent,
    EditItemComponent,
    AddArrearsComponent,
    AllBillsComponent,
    StudentBillComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class FeesModule { }

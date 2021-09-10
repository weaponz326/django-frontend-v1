import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPayablesComponent } from './all-payables/all-payables.component';
import { AddPayableComponent } from './add-payable/add-payable.component';
import { EditPayableComponent } from './edit-payable/edit-payable.component';
import { PayableFormComponent } from './payable-form/payable-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPayablesComponent,
    AddPayableComponent,
    EditPayableComponent,
    PayableFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class PayablesModule { }

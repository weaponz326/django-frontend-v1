import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllEquipmentComponent } from './all-equipment/all-equipment.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllEquipmentComponent,
    NewEquipmentComponent,
    ViewEquipmentComponent,
    EquipmentFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class EquipmentModule { }

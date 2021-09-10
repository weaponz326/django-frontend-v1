import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllManufacturingComponent } from './all-manufacturing/all-manufacturing.component';
import { NewManufacturingComponent } from './new-manufacturing/new-manufacturing.component';
import { ViewManufacturingComponent } from './view-manufacturing/view-manufacturing.component';
import { ManufacturingFormComponent } from './manufacturing-form/manufacturing-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllManufacturingComponent,
    NewManufacturingComponent,
    ViewManufacturingComponent,
    ManufacturingFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class ManufacturingModule { }

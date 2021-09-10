import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { ServiceItemsComponent } from './service-items/service-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllServicesComponent,
    AddServiceComponent,
    ViewServiceComponent,
    ServiceItemsComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class ServicesModule { }

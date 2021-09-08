import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDeliveriesComponent } from './all-deliveries/all-deliveries.component';
import { NewDeliveryComponent } from './new-delivery/new-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllDeliveriesComponent,
    NewDeliveryComponent,
    EditDeliveryComponent,
    DeliveryFormComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class DeliveriesModule { }

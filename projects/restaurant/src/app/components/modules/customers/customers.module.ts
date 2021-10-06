import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllCustomersComponent,
    NewCustomerComponent,
    ViewCustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
    ModuleUtilitiesModule,
  ]
})
export class CustomersModule { }

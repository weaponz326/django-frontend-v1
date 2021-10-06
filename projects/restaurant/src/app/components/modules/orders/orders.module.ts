import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemFormComponent } from './item-form/item-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllOrdersComponent,
    AddOrderComponent,
    ViewOrderComponent,
    OrderItemsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    DropDownListModule,
    DateTimePickerModule,
    ModuleUtilitiesModule,
  ]
})
export class OrdersModule { }

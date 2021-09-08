import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMenuItemsComponent } from './all-menu-items/all-menu-items.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';
import { MenuItemFormComponent } from './menu-item-form/menu-item-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllMenuItemsComponent,
    AddMenuItemComponent,
    ViewMenuItemComponent,
    MenuItemFormComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class MenuModule { }

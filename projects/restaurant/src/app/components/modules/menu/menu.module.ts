import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { MenuPrintModule } from '../../printing/menu-print/menu-print.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMenuItemsComponent } from './all-menu-items/all-menu-items.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';
import { MenuItemFormComponent } from './menu-item-form/menu-item-form.component';
import { AllMenuGroupsComponent } from './all-menu-groups/all-menu-groups.component';
import { NewMenuGroupComponent } from './new-menu-group/new-menu-group.component';
import { ViewMenuGroupComponent } from './view-menu-group/view-menu-group.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllMenuItemsComponent,
    AddMenuItemComponent,
    ViewMenuItemComponent,
    MenuItemFormComponent,
    AllMenuGroupsComponent,
    NewMenuGroupComponent,
    ViewMenuGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    DropDownListModule,
    ModuleUtilitiesModule,
    MenuPrintModule,
  ]
})
export class MenuModule { }

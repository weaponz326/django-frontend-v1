import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllInventoryComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    InventoryFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }

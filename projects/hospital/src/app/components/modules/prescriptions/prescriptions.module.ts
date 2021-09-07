import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { PrescriptionItemsComponent } from './prescription-items/prescription-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemFormComponent } from './item-form/item-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPrescriptionsComponent,
    AddPrescriptionComponent,
    ViewPrescriptionComponent,
    PrescriptionItemsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrescriptionsModule { }

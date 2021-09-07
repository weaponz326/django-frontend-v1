import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMaterialsComponent } from './all-materials/all-materials.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { MaterialFormComponent } from './material-form/material-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllMaterialsComponent,
    AddMaterialComponent,
    ViewMaterialComponent,
    MaterialFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialsModule { }

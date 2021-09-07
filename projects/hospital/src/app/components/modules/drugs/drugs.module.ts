import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDrugsComponent } from './all-drugs/all-drugs.component';
import { NewDrugComponent } from './new-drug/new-drug.component';
import { ViewDrugComponent } from './view-drug/view-drug.component';
import { DrugFormComponent } from './drug-form/drug-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllDrugsComponent,
    NewDrugComponent,
    ViewDrugComponent,
    DrugFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DrugsModule { }

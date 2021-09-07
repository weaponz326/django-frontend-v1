import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllContractorsComponent } from './all-contractors/all-contractors.component';
import { NewContractorComponent } from './new-contractor/new-contractor.component';
import { ViewContractorComponent } from './view-contractor/view-contractor.component';
import { ContractorFormComponent } from './contractor-form/contractor-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllContractorsComponent,
    NewContractorComponent,
    ViewContractorComponent,
    ContractorFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractorsModule { }

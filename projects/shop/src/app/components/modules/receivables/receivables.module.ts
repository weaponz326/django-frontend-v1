import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllReceivablesComponent } from './all-receivables/all-receivables.component';
import { AddReceivableComponent } from './add-receivable/add-receivable.component';
import { EditReceivableComponent } from './edit-receivable/edit-receivable.component';
import { ReceivableFormComponent } from './receivable-form/receivable-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllReceivablesComponent,
    AddReceivableComponent,
    EditReceivableComponent,
    ReceivableFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceivablesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllLettersComponent } from './all-letters/all-letters.component';
import { AddReceivedComponent } from './add-received/add-received.component';
import { EditReceivedComponent } from './edit-received/edit-received.component';
import { ReceivedFormComponent } from './received-form/received-form.component';
import { AddSentComponent } from './add-sent/add-sent.component';
import { EditSentComponent } from './edit-sent/edit-sent.component';
import { SentFormComponent } from './sent-form/sent-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllLettersComponent,
    AddReceivedComponent,
    EditReceivedComponent,
    ReceivedFormComponent,
    AddSentComponent,
    EditSentComponent,
    SentFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LettersModule { }

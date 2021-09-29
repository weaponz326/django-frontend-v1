import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { InputModule } from 'smart-webcomponents-angular/input';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { EditorModule } from 'smart-webcomponents-angular/editor';
import { GridModule } from 'smart-webcomponents-angular/grid';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { NewNoteComponent } from './new-note/new-note.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllNotesComponent,
    ViewNoteComponent,
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    InputModule,
    ButtonModule,
    EditorModule,
    GridModule,
    ModuleUtilitiesModule,
  ]
})
export class NotesModule { }

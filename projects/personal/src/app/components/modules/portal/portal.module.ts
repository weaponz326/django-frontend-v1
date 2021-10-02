import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { CalendarWindowsModule } from '../../select-windows/calendar-windows/calendar-windows.module';
import { NotesWindowsModule } from '../../select-windows/notes-windows/notes-windows.module';
import { TasksWindowsModule } from '../../select-windows/tasks-windows/tasks-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { AppointmentDetailsComponent } from './rink-details/appointment-details/appointment-details.component';
import { NoteDetailsComponent } from './rink-details/note-details/note-details.component';
import { TaskDetailsComponent } from './rink-details/task-details/task-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    NewRinkComponent,
    TimelineComponent,
    ViewRinkComponent,
    SearchViewComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    AppointmentDetailsComponent,
    NoteDetailsComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    CalendarWindowsModule,
    NotesWindowsModule,
    TasksWindowsModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
  ]
})
export class PortalModule { }

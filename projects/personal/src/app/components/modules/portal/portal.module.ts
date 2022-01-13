import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { CalendarWindowsModule } from '../../select-windows/calendar-windows/calendar-windows.module';
import { BudgetWindowsModule } from '../../select-windows/budget-windows/budget-windows.module';
import { NotesWindowsModule } from '../../select-windows/notes-windows/notes-windows.module';
import { AccountsWindowsModule } from '../../select-windows/accounts-windows/accounts-windows.module';
import { TasksWindowsModule } from '../../select-windows/tasks-windows/tasks-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { CalendarDetailsComponent } from './rink-details/calendar-details/calendar-details.component';
import { ScheduleDetailsComponent } from './rink-details/schedule-details/schedule-details.component';
import { BudgetDetailsComponent } from './rink-details/budget-details/budget-details.component';
import { NoteDetailsComponent } from './rink-details/note-details/note-details.component';
import { AccountDetailsComponent } from './rink-details/account-details/account-details.component';
import { TransactionDetailsComponent } from './rink-details/transaction-details/transaction-details.component';
import { TaskGroupDetailsComponent } from './rink-details/task-group-details/task-group-details.component';
import { TaskItemDetailsComponent } from './rink-details/task-item-details/task-item-details.component';


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
    CalendarDetailsComponent,
    ScheduleDetailsComponent,
    BudgetDetailsComponent,
    NoteDetailsComponent,
    AccountDetailsComponent,
    TransactionDetailsComponent,
    TaskGroupDetailsComponent,
    TaskItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    CalendarWindowsModule,
    BudgetWindowsModule,
    NotesWindowsModule,
    AccountsWindowsModule,
    TasksWindowsModule,
  ]
})
export class PortalModule { }

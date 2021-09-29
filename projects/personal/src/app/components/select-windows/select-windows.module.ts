import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from '../module-utilities/module-utilities.module';

import { CalendarComponent } from './calendar/calendar.component';
import { BudgetComponent } from './budget/budget.component';
import { NoteComponent } from './note/note.component';
import { AccountComponent } from './account/account.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    CalendarComponent,
    BudgetComponent,
    NoteComponent,
    AccountComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule
  ],
  exports: [
    CalendarComponent,
    BudgetComponent,
    NoteComponent,
    AccountComponent,
    TaskComponent
  ]
})
export class SelectWindowsModule { }

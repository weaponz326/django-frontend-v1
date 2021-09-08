import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTimetablePrintComponent } from './all-timetable-print/all-timetable-print.component';
import { FullTimetablePrintComponent } from './full-timetable-print/full-timetable-print.component';
import { ClassTimetablePrintComponent } from './class-timetable-print/class-timetable-print.component';



@NgModule({
  declarations: [
    AllTimetablePrintComponent,
    FullTimetablePrintComponent,
    ClassTimetablePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimetablePrintModule { }

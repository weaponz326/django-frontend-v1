import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTimetableComponent } from './all-timetable/all-timetable.component';
import { NewTimetableComponent } from './new-timetable/new-timetable.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { EditTimetableComponent } from './edit-timetable/edit-timetable.component';
import { FullTimetableComponent } from './full-timetable/full-timetable.component';
import { AddPeriodComponent } from './add-period/add-period.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTimetableComponent,
    NewTimetableComponent,
    ClassTimetableComponent,
    EditTimetableComponent,
    FullTimetableComponent,
    AddPeriodComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class TimetableModule { }

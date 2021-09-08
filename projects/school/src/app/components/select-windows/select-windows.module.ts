import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SubjectComponent } from './subject/subject.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentComponent } from './student/student.component';
import { ReportComponent } from './report/report.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FeeComponent } from './fee/fee.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    ParentComponent,
    AssessmentComponent,
    SubjectComponent,
    AttendanceComponent,
    StudentComponent,
    ReportComponent,
    TeacherComponent,
    ClassComponent,
    TimetableComponent,
    FeeComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent,
    AssessmentComponent,
    SubjectComponent,
    AttendanceComponent,
    StudentComponent,
    ReportComponent,
    TeacherComponent,
    ClassComponent,
    TimetableComponent,
    FeeComponent,
    SectionComponent
  ]
})
export class SelectWindowsModule { }

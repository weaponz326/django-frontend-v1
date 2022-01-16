import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/school/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.scss']
})
export class AccessFormComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('adminCheckBoxReference', { read: CheckBoxComponent, static: false }) adminCheckBox!: CheckBoxComponent;
  @ViewChild('assessmentCheckBoxReference', { read: CheckBoxComponent, static: false }) assessmentCheckBox!: CheckBoxComponent;
  @ViewChild('attendanceCheckBoxReference', { read: CheckBoxComponent, static: false }) attendanceCheckBox!: CheckBoxComponent;
  @ViewChild('classesCheckBoxReference', { read: CheckBoxComponent, static: false }) classesCheckBox!: CheckBoxComponent;
  @ViewChild('feesCheckBoxReference', { read: CheckBoxComponent, static: false }) feesCheckBox!: CheckBoxComponent;
  @ViewChild('parentsCheckBoxReference', { read: CheckBoxComponent, static: false }) parentsCheckBox!: CheckBoxComponent;
  @ViewChild('paymentsCheckBoxReference', { read: CheckBoxComponent, static: false }) paymentsCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('reportsCheckBoxReference', { read: CheckBoxComponent, static: false }) reportsCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;
  @ViewChild('staffCheckBoxReference', { read: CheckBoxComponent, static: false }) staffCheckBox!: CheckBoxComponent;
  @ViewChild('studentsCheckBoxReference', { read: CheckBoxComponent, static: false }) studentsCheckBox!: CheckBoxComponent;
  @ViewChild('subjectsCheckBoxReference', { read: CheckBoxComponent, static: false }) subjectsCheckBox!: CheckBoxComponent;
  @ViewChild('teachersCheckBoxReference', { read: CheckBoxComponent, static: false }) teachersCheckBox!: CheckBoxComponent;
  @ViewChild('timetableCheckBoxReference', { read: CheckBoxComponent, static: false }) timetableCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.value = res.admin_access;
          this.assessmentCheckBox.value = res.assessment_access;
          this.attendanceCheckBox.value = res.attendance_access;
          this.classesCheckBox.value = res.classess_access;
          this.feesCheckBox.value = res.fees_access;
          this.parentsCheckBox.value = res.parents_access;
          this.paymentsCheckBox.value = res.payments_access;
          this.portalCheckBox.value = res.portal_access;
          this.reportsCheckBox.value = res.reports_access;
          this.settingsCheckBox.value = res.settings_access;
          this.staffCheckBox.value = res.staff_access;
          this.studentsCheckBox.value = res.students_access;
          this.subjectsCheckBox.value = res.subjects_access;
          this.teachersCheckBox.value = res.teachers_access;
          this.timetableCheckBox.value = res.timetable_access;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveAccessLevel(){
    let access = {
      admin_access: this.adminCheckBox.value,
      assessment_access: this.assessmentCheckBox.value,
      attendance_access: this.attendanceCheckBox.value,
      classess_access: this.classesCheckBox.value,
      fees_access: this.feesCheckBox.value,
      parents_access: this.parentsCheckBox.value,
      payments_access: this.paymentsCheckBox.value,
      portal_access: this.portalCheckBox.value,
      reports_access: this.reportsCheckBox.value,
      settings_access: this.settingsCheckBox.value,
      staff_access: this.staffCheckBox.value,
      students_access: this.studentsCheckBox.value,
      subjects_access: this.subjectsCheckBox.value,
      teachers_access: this.teachersCheckBox.value,
      timetable_access: this.timetableCheckBox.value,
    }

    this.adminApi.putUserAccess(access)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.value = 'true';
      this.assessmentCheckBox.value = 'true';
      this.attendanceCheckBox.value = 'true';
      this.classesCheckBox.value = 'true';
      this.feesCheckBox.value = 'true';
      this.parentsCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.reportsCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
      this.staffCheckBox.value = 'true';
      this.studentsCheckBox.value = 'true';
      this.subjectsCheckBox.value = 'true';
      this.teachersCheckBox.value = 'true';
      this.timetableCheckBox.value = 'true';
    }
    else if (level == 'Manager') {
      this.adminCheckBox.value = 'false';
      this.assessmentCheckBox.value = 'true';
      this.attendanceCheckBox.value = 'true';
      this.classesCheckBox.value = 'true';
      this.feesCheckBox.value = 'true';
      this.parentsCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.reportsCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'true';
      this.studentsCheckBox.value = 'true';
      this.subjectsCheckBox.value = 'true';
      this.teachersCheckBox.value = 'true';
      this.timetableCheckBox.value = 'true';
    }
    else if (level == 'Staff') {
      this.adminCheckBox.value = 'false';
      this.assessmentCheckBox.value = 'false';
      this.attendanceCheckBox.value = 'false';
      this.classesCheckBox.value = 'false';
      this.feesCheckBox.value = 'false';
      this.parentsCheckBox.value = 'false';
      this.paymentsCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.reportsCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'false';
      this.studentsCheckBox.value = 'false';
      this.subjectsCheckBox.value = 'false';
      this.teachersCheckBox.value = 'false';
      this.timetableCheckBox.value = 'false';
    }
  }

}

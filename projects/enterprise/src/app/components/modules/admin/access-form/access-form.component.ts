import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/enterprise/src/app/services/modules/admin-api/admin-api.service';
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

  @ViewChild('accountsCheckBoxReference', { read: CheckBoxComponent, static: false }) accountsCheckBox!: CheckBoxComponent;
  @ViewChild('adminCheckBoxReference', { read: CheckBoxComponent, static: false }) adminCheckBox!: CheckBoxComponent;
  @ViewChild('appraisalCheckBoxReference', { read: CheckBoxComponent, static: false }) appraisalCheckBox!: CheckBoxComponent;
  @ViewChild('assetsCheckBoxReference', { read: CheckBoxComponent, static: false }) assetsCheckBox!: CheckBoxComponent;
  @ViewChild('attendanceCheckBoxReference', { read: CheckBoxComponent, static: false }) attendanceCheckBox!: CheckBoxComponent;
  @ViewChild('budgetCheckBoxReference', { read: CheckBoxComponent, static: false }) budgetCheckBox!: CheckBoxComponent;
  @ViewChild('employeesCheckBoxReference', { read: CheckBoxComponent, static: false }) employeesCheckBox!: CheckBoxComponent;
  @ViewChild('filesCheckBoxReference', { read: CheckBoxComponent, static: false }) filesCheckBox!: CheckBoxComponent;
  @ViewChild('leaveCheckBoxReference', { read: CheckBoxComponent, static: false }) leaveCheckBox!: CheckBoxComponent;
  @ViewChild('ledgerCheckBoxReference', { read: CheckBoxComponent, static: false }) ledgerCheckBox!: CheckBoxComponent;
  @ViewChild('lettersCheckBoxReference', { read: CheckBoxComponent, static: false }) lettersCheckBox!: CheckBoxComponent;
  @ViewChild('payrollCheckBoxReference', { read: CheckBoxComponent, static: false }) payrollCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('procurementCheckBoxReference', { read: CheckBoxComponent, static: false }) procurementCheckBox!: CheckBoxComponent;
  @ViewChild('receptionCheckBoxReference', { read: CheckBoxComponent, static: false }) receptionCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.accountsCheckBox.value = res.accounts_access;
          this.adminCheckBox.value = res.admin_access;
          this.appraisalCheckBox.value = res.appraisal_access;
          this.assetsCheckBox.value = res.assets_access;
          this.attendanceCheckBox.value = res.attendance_access;
          this.budgetCheckBox.value = res.budget_access;
          this.employeesCheckBox.value = res.employees_access;
          this.filesCheckBox.value = res.files_access;
          this.leaveCheckBox.value = res.leave_access;
          this.ledgerCheckBox.value = res.ledger_access;
          this.lettersCheckBox.value = res.letters_access;
          this.payrollCheckBox.value = res.payroll_access;
          this.portalCheckBox.value = res.portal_access;
          this.procurementCheckBox.value = res.procurement_access;
          this.receptionCheckBox.value = res.reception_access;
          this.settingsCheckBox.value = res.settings_access;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveAccessLevel(){
    let access = {
      accounts_access: this.accountsCheckBox.value,
      admin_access: this.adminCheckBox.value,
      appraisal_access: this.appraisalCheckBox.value,
      assets_access: this.assetsCheckBox.value,
      attendance_access: this.attendanceCheckBox.value,
      budget_access: this.budgetCheckBox.value,
      employees_access: this.employeesCheckBox.value,
      files_access: this.filesCheckBox.value,
      leave_access: this.leaveCheckBox.value,
      ledger_access: this.ledgerCheckBox.value,
      letters_access: this.lettersCheckBox.value,
      payroll_access: this.payrollCheckBox.value,
      portal_access: this.portalCheckBox.value,
      procurement_access: this.procurementCheckBox.value,
      reception_access: this.receptionCheckBox.value,
      settings_access: this.settingsCheckBox.value,
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
      this.accountsCheckBox.value = 'true';
      this.adminCheckBox.value = 'true';
      this.appraisalCheckBox.value = 'true';
      this.assetsCheckBox.value = 'true';
      this.attendanceCheckBox.value = 'true';
      this.budgetCheckBox.value = 'true';
      this.employeesCheckBox.value = 'true';
      this.filesCheckBox.value = 'true';
      this.leaveCheckBox.value = 'true';
      this.ledgerCheckBox.value = 'true';
      this.lettersCheckBox.value = 'true';
      this.payrollCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.procurementCheckBox.value = 'true';
      this.receptionCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
    }
    else if (level == 'Manager') {
      this.accountsCheckBox.value = 'true';
      this.adminCheckBox.value = 'false';
      this.appraisalCheckBox.value = 'true';
      this.assetsCheckBox.value = 'true';
      this.attendanceCheckBox.value = 'true';
      this.budgetCheckBox.value = 'true';
      this.employeesCheckBox.value = 'true';
      this.filesCheckBox.value = 'true';
      this.leaveCheckBox.value = 'true';
      this.ledgerCheckBox.value = 'true';
      this.lettersCheckBox.value = 'true';
      this.payrollCheckBox.value = 'true';
      this.portalCheckBox.value = 'false';
      this.procurementCheckBox.value = 'true';
      this.receptionCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
    }
    else if (level == 'Staff') {
      this.accountsCheckBox.value = 'false';
      this.adminCheckBox.value = 'false';
      this.appraisalCheckBox.value = 'false';
      this.assetsCheckBox.value = 'false';
      this.attendanceCheckBox.value = 'false';
      this.budgetCheckBox.value = 'false';
      this.employeesCheckBox.value = 'false';
      this.filesCheckBox.value = 'false';
      this.leaveCheckBox.value = 'false';
      this.ledgerCheckBox.value = 'false';
      this.lettersCheckBox.value = 'false';
      this.payrollCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.procurementCheckBox.value = 'false';
      this.receptionCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
    }
  }

}

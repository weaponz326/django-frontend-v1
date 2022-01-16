import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/hospital/src/app/services/modules/admin-api/admin-api.service';
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
  @ViewChild('admissionsCheckBoxReference', { read: CheckBoxComponent, static: false }) admissionsCheckBox!: CheckBoxComponent;
  @ViewChild('appointmentsCheckBoxReference', { read: CheckBoxComponent, static: false }) appointmentsCheckBox!: CheckBoxComponent;
  @ViewChild('billsCheckBoxReference', { read: CheckBoxComponent, static: false }) billsCheckBox!: CheckBoxComponent;
  @ViewChild('diagnosisCheckBoxReference', { read: CheckBoxComponent, static: false }) diagnosisCheckBox!: CheckBoxComponent;
  @ViewChild('doctorsCheckBoxReference', { read: CheckBoxComponent, static: false }) doctorsCheckBox!: CheckBoxComponent;
  @ViewChild('drugsCheckBoxReference', { read: CheckBoxComponent, static: false }) drugsCheckBox!: CheckBoxComponent;
  @ViewChild('laboratoryCheckBoxReference', { read: CheckBoxComponent, static: false }) laboratoryCheckBox!: CheckBoxComponent;
  @ViewChild('nursesCheckBoxReference', { read: CheckBoxComponent, static: false }) nursesCheckBox!: CheckBoxComponent;
  @ViewChild('patientsCheckBoxReference', { read: CheckBoxComponent, static: false }) patientsCheckBox!: CheckBoxComponent;
  @ViewChild('paymentsCheckBoxReference', { read: CheckBoxComponent, static: false }) paymentsCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('prescriptionsCheckBoxReference', { read: CheckBoxComponent, static: false }) prescriptionsCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;
  @ViewChild('staffCheckBoxReference', { read: CheckBoxComponent, static: false }) staffCheckBox!: CheckBoxComponent;
  @ViewChild('wardsCheckBoxReference', { read: CheckBoxComponent, static: false }) wardsCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.value = res.admin_access;
          this.admissionsCheckBox.value = res.admissions_access;
          this.appointmentsCheckBox.value = res.appointments_access;
          this.billsCheckBox.value = res.bills_access;
          this.diagnosisCheckBox.value = res.diagnosis_access;
          this.doctorsCheckBox.value = res.doctors_access;
          this.drugsCheckBox.value = res.drugs_access;
          this.laboratoryCheckBox.value = res.laboratory_access;
          this.nursesCheckBox.value = res.murses_access;
          this.patientsCheckBox.value = res.patients_access;
          this.paymentsCheckBox.value = res.payments_access;
          this.portalCheckBox.value = res.portal_access;
          this.prescriptionsCheckBox.value = res.prescriptions_acces;
          this.settingsCheckBox.value = res.settings_access;
          this.staffCheckBox.value = res.staff_access;
          this.wardsCheckBox.value = res.wards_access;
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
      admissions_access: this.admissionsCheckBox.value,
      appointments_access: this.appointmentsCheckBox.value,
      bills_access: this.billsCheckBox.value,
      diagnosis_access: this.diagnosisCheckBox.value,
      doctors_access: this.doctorsCheckBox.value,
      drugs_access: this.drugsCheckBox.value,
      laboratory_access: this.laboratoryCheckBox.value,
      murses_access: this.nursesCheckBox.value,
      patients_access: this.patientsCheckBox.value,
      payments_access: this.paymentsCheckBox.value,
      portal_access: this.portalCheckBox.value,
      prescriptions_acces: this.prescriptionsCheckBox.value,
      settings_access: this.settingsCheckBox.value,
      staff_access: this.staffCheckBox.value,
      wards_access: this.wardsCheckBox.value,
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
      this.admissionsCheckBox.value = 'true';
      this.appointmentsCheckBox.value = 'true';
      this.billsCheckBox.value = 'true';
      this.diagnosisCheckBox.value = 'true';
      this.doctorsCheckBox.value = 'true';
      this.drugsCheckBox.value = 'true';
      this.laboratoryCheckBox.value = 'true';
      this.nursesCheckBox.value = 'true';
      this.patientsCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.prescriptionsCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
      this.staffCheckBox.value = 'true';
      this.wardsCheckBox.value = 'true';
    }
    else if (level == 'Manager') {
      this.adminCheckBox.value = 'false';
      this.admissionsCheckBox.value = 'true';
      this.appointmentsCheckBox.value = 'true';
      this.billsCheckBox.value = 'true';
      this.diagnosisCheckBox.value = 'true';
      this.doctorsCheckBox.value = 'true';
      this.drugsCheckBox.value = 'true';
      this.laboratoryCheckBox.value = 'true';
      this.nursesCheckBox.value = 'true';
      this.patientsCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.prescriptionsCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'true';
      this.wardsCheckBox.value = 'true';
    }
    else if (level == 'Staff') {
      this.adminCheckBox.value = 'false';
      this.admissionsCheckBox.value = 'false';
      this.appointmentsCheckBox.value = 'false';
      this.billsCheckBox.value = 'false';
      this.diagnosisCheckBox.value = 'false';
      this.doctorsCheckBox.value = 'false';
      this.drugsCheckBox.value = 'false';
      this.laboratoryCheckBox.value = 'false';
      this.nursesCheckBox.value = 'false';
      this.patientsCheckBox.value = 'false';
      this.paymentsCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.prescriptionsCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'false';
      this.wardsCheckBox.value = 'false';
    }
  }

}

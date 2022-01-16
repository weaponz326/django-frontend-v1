import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/hotel/src/app/services/modules/admin-api/admin-api.service';
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
  @ViewChild('assetsCheckBoxReference', { read: CheckBoxComponent, static: false }) assetsCheckBox!: CheckBoxComponent;
  @ViewChild('billsCheckBoxReference', { read: CheckBoxComponent, static: false }) billsCheckBox!: CheckBoxComponent;
  @ViewChild('bookingsCheckBoxReference', { read: CheckBoxComponent, static: false }) bookingsCheckBox!: CheckBoxComponent;
  @ViewChild('checkinCheckBoxReference', { read: CheckBoxComponent, static: false }) checkinCheckBox!: CheckBoxComponent;
  @ViewChild('guestsCheckBoxReference', { read: CheckBoxComponent, static: false }) guestsCheckBox!: CheckBoxComponent;
  @ViewChild('housekeepingCheckBoxReference', { read: CheckBoxComponent, static: false }) housekeepingCheckBox!: CheckBoxComponent;
  @ViewChild('paymentsCheckBoxReference', { read: CheckBoxComponent, static: false }) paymentsCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('roomsCheckBoxReference', { read: CheckBoxComponent, static: false }) roomsCheckBox!: CheckBoxComponent;
  @ViewChild('servicesCheckBoxReference', { read: CheckBoxComponent, static: false }) servicesCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;
  @ViewChild('staffCheckBoxReference', { read: CheckBoxComponent, static: false }) staffCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.value = res.admin_access;
          this.assetsCheckBox.value = res.assets_access;
          this.billsCheckBox.value = res.bills_access;
          this.bookingsCheckBox.value = res.bookings_access;
          this.checkinCheckBox.value = res.checkin_access;
          this.guestsCheckBox.value = res.guests_access;
          this.housekeepingCheckBox.value = res.housekeeping_access;
          this.paymentsCheckBox.value = res.payments_access;
          this.portalCheckBox.value = res.portal_access;
          this.roomsCheckBox.value = res.rooms_access;
          this.servicesCheckBox.value = res.services_access;
          this.settingsCheckBox.value = res.settings_access;
          this.staffCheckBox.value = res.staff_access;
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
      assets_access: this.assetsCheckBox.value,
      bills_access: this.billsCheckBox.value,
      bookings_access: this.bookingsCheckBox.value,
      checkin_access: this.checkinCheckBox.value,
      guests_access: this.guestsCheckBox.value,
      housekeeping_access: this.housekeepingCheckBox.value,
      payments_access: this.paymentsCheckBox.value,
      portal_access: this.portalCheckBox.value,
      rooms_access: this.roomsCheckBox.value,
      services_access: this.servicesCheckBox.value,
      settings_access: this.settingsCheckBox.value,
      staff_access: this.staffCheckBox.value,
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
      this.assetsCheckBox.value = 'true';
      this.billsCheckBox.value = 'true';
      this.bookingsCheckBox.value = 'true';
      this.checkinCheckBox.value = 'true';
      this.guestsCheckBox.value = 'true';
      this.housekeepingCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.roomsCheckBox.value = 'true';
      this.servicesCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
      this.staffCheckBox.value = 'true';
    }
    else if (level == 'Manager') {
      this.adminCheckBox.value = 'false';
      this.assetsCheckBox.value = 'true';
      this.billsCheckBox.value = 'true';
      this.bookingsCheckBox.value = 'true';
      this.checkinCheckBox.value = 'true';
      this.guestsCheckBox.value = 'true';
      this.housekeepingCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'false';
      this.roomsCheckBox.value = 'true';
      this.servicesCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'true';

    }
    else if (level == 'Staff') {
      this.adminCheckBox.value = 'false';
      this.assetsCheckBox.value = 'false';
      this.billsCheckBox.value = 'false';
      this.bookingsCheckBox.value = 'false';
      this.checkinCheckBox.value = 'false';
      this.guestsCheckBox.value = 'false';
      this.housekeepingCheckBox.value = 'false';
      this.paymentsCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.roomsCheckBox.value = 'false';
      this.servicesCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'false';
    }
  }

}

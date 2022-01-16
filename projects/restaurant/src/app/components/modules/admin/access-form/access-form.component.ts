import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';
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
  @ViewChild('customersCheckBoxReference', { read: CheckBoxComponent, static: false }) customersCheckBox!: CheckBoxComponent;
  @ViewChild('deliveriesCheckBoxReference', { read: CheckBoxComponent, static: false }) deliveriesCheckBox!: CheckBoxComponent;
  @ViewChild('menuCheckBoxReference', { read: CheckBoxComponent, static: false }) menuCheckBox!: CheckBoxComponent;
  @ViewChild('ordersCheckBoxReference', { read: CheckBoxComponent, static: false }) ordersCheckBox!: CheckBoxComponent;
  @ViewChild('paymentsCheckBoxReference', { read: CheckBoxComponent, static: false }) paymentsCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;
  @ViewChild('staffCheckBoxReference', { read: CheckBoxComponent, static: false }) staffCheckBox!: CheckBoxComponent;
  @ViewChild('reservationsCheckBoxReference', { read: CheckBoxComponent, static: false }) reservationsCheckBox!: CheckBoxComponent;
  @ViewChild('tablesCheckBoxReference', { read: CheckBoxComponent, static: false }) tablesCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.value = res.admin_access;
          this.customersCheckBox.value = res.customers_access;
          this.deliveriesCheckBox.value = res.deliveries_access;
          this.menuCheckBox.value = res.menu_access;
          this.ordersCheckBox.value = res.orders_access;
          this.paymentsCheckBox.value = res.payments_access;
          this.portalCheckBox.value = res.portal_access;
          this.settingsCheckBox.value = res.settings_access;
          this.staffCheckBox.value = res.staff_access;
          this.reservationsCheckBox.value = res.reservations_access;
          this.tablesCheckBox.value = res.tables_access;
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
      customers_access: this.customersCheckBox.value,
      deliveries_access: this.deliveriesCheckBox.value,
      menu_access: this.menuCheckBox.value,
      orders_access: this.ordersCheckBox.value,
      payments_access: this.paymentsCheckBox.value,
      portal_access: this.portalCheckBox.value,
      settings_access: this.settingsCheckBox.value,
      staff_access: this.staffCheckBox.value,
      reservations_access: this.reservationsCheckBox.value,
      tables_access: this.tablesCheckBox.value
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

    if (level == 'Admin'){
      this.adminCheckBox.value = 'true';
      this.customersCheckBox.value = 'true';
      this.deliveriesCheckBox.value = 'true';
      this.menuCheckBox.value = 'true';
      this.ordersCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
      this.staffCheckBox.value = 'true';
      this.reservationsCheckBox.value = 'true';
      this.tablesCheckBox.value = 'true';
    }
    else if (level == 'Manager'){
      this.adminCheckBox.value = 'false';
      this.customersCheckBox.value = 'true';
      this.deliveriesCheckBox.value = 'true';
      this.menuCheckBox.value = 'true';
      this.ordersCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'true';
      this.reservationsCheckBox.value = 'true';
      this.tablesCheckBox.value = 'true';
    }
    else if (level == 'Staff'){
      this.adminCheckBox.value = 'false';
      this.customersCheckBox.value = 'false';
      this.deliveriesCheckBox.value = 'false';
      this.menuCheckBox.value = 'false';
      this.ordersCheckBox.value = 'false';
      this.paymentsCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.staffCheckBox.value = 'false';
      this.reservationsCheckBox.value = 'false';
      this.tablesCheckBox.value = 'false';
    }
  }

}

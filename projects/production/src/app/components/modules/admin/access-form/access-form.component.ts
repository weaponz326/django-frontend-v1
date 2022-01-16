import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/production/src/app/services/modules/admin-api/admin-api.service';
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
  @ViewChild('contractorsCheckBoxReference', { read: CheckBoxComponent, static: false }) contractorsCheckBox!: CheckBoxComponent;
  @ViewChild('equipmentCheckBoxReference', { read: CheckBoxComponent, static: false }) equipmentCheckBox!: CheckBoxComponent;
  @ViewChild('manufacturingCheckBoxReference', { read: CheckBoxComponent, static: false }) manufacturingCheckBox!: CheckBoxComponent;
  @ViewChild('ordersCheckBoxReference', { read: CheckBoxComponent, static: false }) ordersCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('productsCheckBoxReference', { read: CheckBoxComponent, static: false }) productsCheckBox!: CheckBoxComponent;
  @ViewChild('projectsCheckBoxReference', { read: CheckBoxComponent, static: false }) projectsCheckBox!: CheckBoxComponent;
  @ViewChild('purcahsingCheckBoxReference', { read: CheckBoxComponent, static: false }) purchasingCheckBox!: CheckBoxComponent;
  @ViewChild('scheduleCheckBoxReference', { read: CheckBoxComponent, static: false }) scheduleCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;
  @ViewChild('stockCheckBoxReference', { read: CheckBoxComponent, static: false }) stockCheckBox!: CheckBoxComponent;
  @ViewChild('tasksCheckBoxReference', { read: CheckBoxComponent, static: false }) tasksCheckBox!: CheckBoxComponent;
  @ViewChild('workersCheckBoxReference', { read: CheckBoxComponent, static: false }) workersCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.value = res.admin_access;
          this.contractorsCheckBox.value = res.contractors_access;
          this.equipmentCheckBox.value = res.equipment_access;
          this.manufacturingCheckBox.value = res.manufacturing_access;
          this.ordersCheckBox.value = res.orders_access;
          this.portalCheckBox.value = res.portal_access;
          this.productsCheckBox.value = res.products_access;
          this.projectsCheckBox.value = res.projects_access;
          this.purchasingCheckBox.value = res.purchasing_access;
          this.scheduleCheckBox.value = res.schedule_access;
          this.settingsCheckBox.value = res.settings_access;
          this.stockCheckBox.value = res.stock_access;
          this.tasksCheckBox.value = res.tasks_access;
          this.workersCheckBox.value = res.workers_access;
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
      contractors_access: this.contractorsCheckBox.value,
      equipment_access: this.equipmentCheckBox.value,
      manufacturing_access: this.manufacturingCheckBox.value,
      orders_access: this.ordersCheckBox.value,
      portal_access: this.portalCheckBox.value,
      products_access: this.productsCheckBox.value,
      projects_access: this.projectsCheckBox.value,
      purchasing_access: this.purchasingCheckBox.value,
      schedule_access: this.scheduleCheckBox.value,
      settings_access: this.settingsCheckBox.value,
      stock_access: this.stockCheckBox.value,
      tasks_access: this.tasksCheckBox.value,
      workers_access: this.workersCheckBox.value,
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
      this.contractorsCheckBox.value = 'true';
      this.equipmentCheckBox.value = 'true';
      this.manufacturingCheckBox.value = 'true';
      this.ordersCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.productsCheckBox.value = 'true';
      this.projectsCheckBox.value = 'true';
      this.purchasingCheckBox.value = 'true';
      this.scheduleCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
      this.stockCheckBox.value = 'true';
      this.tasksCheckBox.value = 'true';
      this.workersCheckBox.value = 'true';
    }
    else if (level == 'Manager') {
      this.adminCheckBox.value = 'false';
      this.contractorsCheckBox.value = 'true';
      this.equipmentCheckBox.value = 'true';
      this.manufacturingCheckBox.value = 'true';
      this.ordersCheckBox.value = 'true';
      this.portalCheckBox.value = 'false';
      this.productsCheckBox.value = 'true';
      this.projectsCheckBox.value = 'true';
      this.purchasingCheckBox.value = 'true';
      this.scheduleCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
      this.stockCheckBox.value = 'true';
      this.tasksCheckBox.value = 'true';
      this.workersCheckBox.value = 'true';
    }
    else if (level == 'Staff') {
      this.adminCheckBox.value = 'false';
      this.contractorsCheckBox.value = 'false';
      this.equipmentCheckBox.value = 'false';
      this.manufacturingCheckBox.value = 'false';
      this.ordersCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.productsCheckBox.value = 'false';
      this.projectsCheckBox.value = 'false';
      this.purchasingCheckBox.value = 'false';
      this.scheduleCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.stockCheckBox.value = 'false';
      this.tasksCheckBox.value = 'false';
      this.workersCheckBox.value = 'false';
    }
  }

}

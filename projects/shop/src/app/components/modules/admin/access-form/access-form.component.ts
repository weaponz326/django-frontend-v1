import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/shop/src/app/services/modules/admin-api/admin-api.service';
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
  @ViewChild('cashflowCheckBoxReference', { read: CheckBoxComponent, static: false }) cashflowCheckBox!: CheckBoxComponent;
  @ViewChild('customersCheckBoxReference', { read: CheckBoxComponent, static: false }) customersCheckBox!: CheckBoxComponent;
  @ViewChild('inventoryCheckBoxReference', { read: CheckBoxComponent, static: false }) inventoryCheckBox!: CheckBoxComponent;
  @ViewChild('invoiceCheckBoxReference', { read: CheckBoxComponent, static: false }) invoiceCheckBox!: CheckBoxComponent;
  @ViewChild('markettingCheckBoxReference', { read: CheckBoxComponent, static: false }) markettingCheckBox!: CheckBoxComponent;
  @ViewChild('ordersCheckBoxReference', { read: CheckBoxComponent, static: false }) ordersCheckBox!: CheckBoxComponent;
  @ViewChild('paymentsCheckBoxReference', { read: CheckBoxComponent, static: false }) paymentsCheckBox!: CheckBoxComponent;
  @ViewChild('payablesCheckBoxReference', { read: CheckBoxComponent, static: false }) payablesCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('productsCheckBoxReference', { read: CheckBoxComponent, static: false }) productsCheckBox!: CheckBoxComponent;
  @ViewChild('purchasingCheckBoxReference', { read: CheckBoxComponent, static: false }) purchasingCheckBox!: CheckBoxComponent;
  @ViewChild('receivablesCheckBoxReference', { read: CheckBoxComponent, static: false }) receivablesCheckBox!: CheckBoxComponent;
  @ViewChild('salesCheckBoxReference', { read: CheckBoxComponent, static: false }) salesCheckBox!: CheckBoxComponent;
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
          this.cashflowCheckBox.value = res.cashflow_access;
          this.customersCheckBox.value = res.customers_access;
          this.inventoryCheckBox.value = res.inventory_access;
          this.invoiceCheckBox.value = res.invoice_access;
          this.markettingCheckBox.value = res.marketting_access;
          this.ordersCheckBox.value = res.orders_access;
          this.paymentsCheckBox.value = res.payments_access;
          this.payablesCheckBox.value = res.payables_access;
          this.portalCheckBox.value = res.portal_access;
          this.productsCheckBox.value = res.products_access;
          this.purchasingCheckBox.value = res.purhasing_access;
          this.receivablesCheckBox.value = res.receivables_access;
          this.salesCheckBox.value = res.sales_access;
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
      admin_access: this.adminCheckBox.value,
      cashflow_access: this.cashflowCheckBox.value,
      customers_access: this.customersCheckBox.value,
      inventory_access: this.inventoryCheckBox.value,
      invoice_access: this.invoiceCheckBox.value,
      marketting_access: this.markettingCheckBox.value,
      orders_access: this.ordersCheckBox.value,
      payments_access: this.paymentsCheckBox.value,
      payables_access: this.payablesCheckBox.value,
      portal_access: this.portalCheckBox.value,
      products_access: this.productsCheckBox.value,
      purhasing_access: this.purchasingCheckBox.value,
      receivables_access: this.receivablesCheckBox.value,
      sales_access: this.salesCheckBox.value,
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
      this.adminCheckBox.value = 'true';
      this.cashflowCheckBox.value = 'true';
      this.customersCheckBox.value = 'true';
      this.inventoryCheckBox.value = 'true';
      this.invoiceCheckBox.value = 'true';
      this.markettingCheckBox.value = 'true';
      this.ordersCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.payablesCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.productsCheckBox.value = 'true';
      this.purchasingCheckBox.value = 'true';
      this.receivablesCheckBox.value = 'true';
      this.salesCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
    }
    else if (level == 'Manager') {
      this.adminCheckBox.value = 'false';
      this.cashflowCheckBox.value = 'true';
      this.customersCheckBox.value = 'true';
      this.inventoryCheckBox.value = 'true';
      this.invoiceCheckBox.value = 'true';
      this.markettingCheckBox.value = 'true';
      this.ordersCheckBox.value = 'true';
      this.paymentsCheckBox.value = 'true';
      this.payablesCheckBox.value = 'true';
      this.portalCheckBox.value = 'false';
      this.productsCheckBox.value = 'true';
      this.purchasingCheckBox.value = 'true';
      this.receivablesCheckBox.value = 'true';
      this.salesCheckBox.value = 'true';
      this.settingsCheckBox.value = 'false';
    }
    else if (level == 'Staff') {
      this.adminCheckBox.value = 'false';
      this.cashflowCheckBox.value = 'false';
      this.customersCheckBox.value = 'false';
      this.inventoryCheckBox.value = 'false';
      this.invoiceCheckBox.value = 'false';
      this.markettingCheckBox.value = 'false';
      this.ordersCheckBox.value = 'false';
      this.paymentsCheckBox.value = 'false';
      this.payablesCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.productsCheckBox.value = 'false';
      this.purchasingCheckBox.value = 'false';
      this.receivablesCheckBox.value = 'false';
      this.salesCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

import { AdminApiService } from 'projects/association/src/app/services/modules/admin-api/admin-api.service';
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
  @ViewChild('accountsCheckBoxReference', { read: CheckBoxComponent, static: false }) accountsCheckBox!: CheckBoxComponent;
  @ViewChild('actionPlanCheckBoxReference', { read: CheckBoxComponent, static: false }) actionPlanCheckBox!: CheckBoxComponent;
  @ViewChild('budgetCheckBoxReference', { read: CheckBoxComponent, static: false }) budgetCheckBox!: CheckBoxComponent;
  @ViewChild('committeesCheckBoxReference', { read: CheckBoxComponent, static: false }) committeesCheckBox!: CheckBoxComponent;
  @ViewChild('duesCheckBoxReference', { read: CheckBoxComponent, static: false }) duesCheckBox!: CheckBoxComponent;
  @ViewChild('executivesCheckBoxReference', { read: CheckBoxComponent, static: false }) executivesCheckBox!: CheckBoxComponent;
  @ViewChild('groupsCheckBoxReference', { read: CheckBoxComponent, static: false }) groupsCheckBox!: CheckBoxComponent;
  @ViewChild('membersCheckBoxReference', { read: CheckBoxComponent, static: false }) membersCheckBox!: CheckBoxComponent;
  @ViewChild('portalCheckBoxReference', { read: CheckBoxComponent, static: false }) portalCheckBox!: CheckBoxComponent;
  @ViewChild('settingsCheckBoxReference', { read: CheckBoxComponent, static: false }) settingsCheckBox!: CheckBoxComponent;
  @ViewChild('yearsCheckBoxReference', { read: CheckBoxComponent, static: false }) yearsCheckBox!: CheckBoxComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.value = res.admin_access;
          this.accountsCheckBox.value = res.accounts_access;
          this.actionPlanCheckBox.value = res.actionPlan_access;
          this.budgetCheckBox.value = res.budget_access;
          this.committeesCheckBox.value = res.committees_access;
          this.duesCheckBox.value = res.dues_access;
          this.executivesCheckBox.value = res.executives_access;
          this.groupsCheckBox.value = res.groups_access;
          this.membersCheckBox.value = res.members_access;
          this.portalCheckBox.value = res.portal_access;
          this.settingsCheckBox.value = res.settings_access;
          this.yearsCheckBox.value = res.years_access;
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
      accounts_access: this.accountsCheckBox.value,
      actionPlan_access: this.actionPlanCheckBox.value,
      budget_access: this.budgetCheckBox.value,
      committees_access: this.committeesCheckBox.value,
      dues_access: this.duesCheckBox.value,
      executives_access: this.executivesCheckBox.value,
      groups_access: this.groupsCheckBox.value,
      members_access: this.membersCheckBox.value,
      portal_access: this.portalCheckBox.value,
      settings_access: this.settingsCheckBox.value,
      years_access: this.yearsCheckBox.value,
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
      this.accountsCheckBox.value = 'true';
      this.actionPlanCheckBox.value = 'true';
      this.budgetCheckBox.value = 'true';
      this.committeesCheckBox.value = 'true';
      this.duesCheckBox.value = 'true';
      this.executivesCheckBox.value = 'true';
      this.groupsCheckBox.value = 'true';
      this.membersCheckBox.value = 'true';
      this.portalCheckBox.value = 'true';
      this.settingsCheckBox.value = 'true';
      this.yearsCheckBox.value = 'true';
    }
    else if (level == 'Manager'){
      this.adminCheckBox.value = 'false';
      this.accountsCheckBox.value = 'true';
      this.actionPlanCheckBox.value = 'true';
      this.budgetCheckBox.value = 'true';
      this.committeesCheckBox.value = 'true';
      this.duesCheckBox.value = 'true';
      this.executivesCheckBox.value = 'true';
      this.groupsCheckBox.value = 'true';
      this.membersCheckBox.value = 'true';
      this.portalCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.yearsCheckBox.value = 'true';
    }
    else if (level == 'Staff'){
      this.adminCheckBox.value = 'false';
      this.accountsCheckBox.value = 'false';
      this.actionPlanCheckBox.value = 'false';
      this.budgetCheckBox.value = 'false';
      this.committeesCheckBox.value = 'false';
      this.duesCheckBox.value = 'false';
      this.executivesCheckBox.value = 'false';
      this.groupsCheckBox.value = 'false';
      this.membersCheckBox.value = 'false';
      this.portalCheckBox.value = 'false';
      this.settingsCheckBox.value = 'false';
      this.yearsCheckBox.value = 'false';
    }
  }

}

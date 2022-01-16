import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';
import { AccessFormComponent } from '../access-form/access-form.component';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }

  @ViewChild('userNameInputReference', { read: InputComponent, static: false }) userNameInput!: InputComponent;
  @ViewChild('accessLevelDropDownListReference', { read: DropDownListComponent, static: false }) accessLevelDropDownList!: DropDownListComponent;
  @ViewChild('saveButtonReference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;
  @ViewChild('deleteButtonReference', { read: ButtonComponent, static: false }) deleteButton!: ButtonComponent;
  @ViewChild('cancelReference', { read: ButtonComponent, static: false }) cancelButton!: ButtonComponent;

  @ViewChild('accessFormComponentReference', { read: AccessFormComponent, static: false }) accessFormComponent!: AccessFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/home/admin/all-users" },
    { text: "View User", url: "/home/admin/view-user" },
  ];

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.adminApi.getUser()
      .subscribe(
        res => {
          console.log(res);
          this.userNameInput.value = res.user_name;
          this.accessLevelDropDownList.value = res.user_level;

          this.accessFormComponent.initAccessLevel();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveUser(){
    // sends both user access details

    let user = { user_level: this.accessLevelDropDownList.value }

    this.adminApi.putUser(user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    this.accessFormComponent.saveAccessLevel();
  }

  changeLevel(event: any)  {
    console.log(event.args.item.value);

    this.accessFormComponent.setLevelAccess(event.args.item.value);
  }

}

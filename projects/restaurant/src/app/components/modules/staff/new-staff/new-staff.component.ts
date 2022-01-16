import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';
import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('staffFormComponentReference', { read: StaffFormComponent, static: false }) staffForm!: StaffFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Staff", url: "/home/staff/new-staff" },
  ];

  ngOnInit(): void {
  }

  saveStaff(){
    console.log('u are saving a new staff');

    var staffData = {
      account: localStorage.getItem('restaurant_id'),
      first_name: this.staffForm.firstNameInput.value,
      last_name: this.staffForm.lastNameInput.value,
      sex: this.staffForm.sexDropDownList.value,
      // date_of_birth: this.staffForm.dobCustomWidget.value,
      photo: this.staffForm.photoCustomWidget.image,
      nationality: this.staffForm.nationalityInput.value,
      religion: this.staffForm.religionInput.value,
      phone: this.staffForm.phoneInput.value,
      email: this.staffForm.emailInput.value,
      address: this.staffForm.addressTextBox.value,
      state: this.staffForm.stateInput.value,
      city: this.staffForm.cityInput.value,
      post_code: this.staffForm.postCodeInput.value,
      staff_code: this.staffForm.staffCodeInput.value,
      department: this.staffForm.departmentInput.value,
      job: this.staffForm.jobInput.value,
    }

    console.log(staffData);

    this.staffApi.postStaff(staffData)
      .subscribe(
        res => {
          console.log(res);

          sessionStorage.setItem('staff_id', res.id);
          this.router.navigateByUrl('/suite/staff/view-staff');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

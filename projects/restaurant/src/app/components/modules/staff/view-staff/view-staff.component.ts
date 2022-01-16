import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';
import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('staffFormComponentReference', { read: StaffFormComponent, static: false }) staffForm!: StaffFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Staff", url: "/home/staff/all-staff" },
    { text: "View Staff", url: "/home/staff/view-staff" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getStaff();
  }

  getStaff(){
    this.staffApi.getSingleStaff()
      .subscribe(
        res => {
          console.log(res);

          this.staffForm.firstNameInput.value = res.first_name;
          this.staffForm.lastNameInput.value = res.last_name;
          this.staffForm.sexDropDownList.value = res.sex;
          // this.staffForm.dobCustomWidget.value = res.date_of_birth;
          this.staffForm.photoCustomWidget.image = res.photo;
          this.staffForm.nationalityInput.value = res.nationality;
          this.staffForm.religionInput.value = res.religion;
          this.staffForm.phoneInput.value = res.phone;
          this.staffForm.emailInput.value = res.email;
          this.staffForm.addressTextBox.value = res.address;
          this.staffForm.stateInput.value = res.state;
          this.staffForm.cityInput.value = res.city;
          this.staffForm.postCodeInput.value = res.post_code;
          this.staffForm.staffCodeInput.value = res.staff_code;
          this.staffForm.departmentInput.value = res.department;
          this.staffForm.jobInput.value = res.job;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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

    this.staffApi.putStaff(staffData)
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

}

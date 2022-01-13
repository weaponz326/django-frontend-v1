import { Component, OnInit, ViewChild } from '@angular/core';

// import { TabsComponent } from 'smart-webcomponents-angular/tabs';

import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { BasicComponent } from '../profile-content/basic/basic.component';
import { AdditionalComponent } from '../profile-content/additional/additional.component';
import { PhotoComponent } from '../profile-content/photo/photo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('basicComponentReference') basic!: BasicComponent;
  @ViewChild('addtionalComponentReference') additional!: AdditionalComponent;
  @ViewChild('photoComponentReference') photo!: PhotoComponent;
  @ViewChild('locationComponentReference') location!: LocationComponent;
  @ViewChild('contactComponentReference') contact!: ContactComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Profile", url: "/home/profile/dashboard" },
  ];

  ngOnInit(): void {
    this.getBasic();
    this.getExtended();
  }

  getBasic(){
    this.settingsApi.getUser()
      .subscribe(
        res => {
          console.log(res);
          this.basic.basicForm.controls.firstName.setValue(res.first_name);
          this.basic.basicForm.controls.lastName.setValue(res.last_name);
          this.basic.basicForm.controls.about.setValue(res.about);
          this.location.location = res.location;
          this.contact.contactForm.controls.email.setValue(res.email);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getExtended(){
    this.settingsApi.getExtendedProfile()
      .subscribe(
        res => {
          console.log(res);
          this.additional.bdayInput.value = res.date_of_birth;
          this.additional.additionalForm.controls.gender.setValue(res.gender);
          this.location.locationForm.controls.country.setValue(res.country);
          this.location.locationForm.controls.state.setValue(res.state);
          this.location.locationForm.controls.city.setValue(res.city);
          this.contact.contactForm.controls.phone.setValue(res.phone);
          this.contact.contactForm.controls.address.setValue(res.address);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sendUser(data: any){
    this.photo.saveButton.disabled = true;

    this.settingsApi.putUser(data)
      .subscribe(
        res => {
          console.log(res);
          this.photo.saveButton.disabled = false;
        },
        err => {
          console.log(err);
          this.photo.saveButton.disabled = false;

          this.connectionToast.openToast();
        }
      )
  }

  // extended profile
  sendExtended(data: any){
    console.log(data);

    this.settingsApi.putExtendedProfile(data)
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

  saveAdditional(data: any){
    let additionalData = {
      gender: data.gender,
      date_of_birth: data.date_of_birth
    }

    this.sendExtended(additionalData);
  }

  saveLocation(data: any){
    let locationData = {
      country: data.country,
      state: data.state,
      city: data.city
    }

    this.sendExtended(locationData);
  }

  saveContact(data: any){
    let contactData = {
      phone: data.phone,
      email: data.email,
      address: data.address
    }

    this.sendExtended(contactData);
  }

}

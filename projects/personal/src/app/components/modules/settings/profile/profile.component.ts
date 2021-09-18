import { Component, OnInit, ViewChild } from '@angular/core';

import { TabsComponent } from 'smart-webcomponents-angular/tabs';

import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';
import { BasicComponent } from '../profile-content/basic/basic.component';
import { AdditionalComponent } from '../profile-content/additional/additional.component';
import { PhotoComponent } from '../profile-content/photo/photo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('tabsReference', { read: TabsComponent, static: false }) tabs!: TabsComponent;

  @ViewChild('basicComponentReference') basic!: BasicComponent;
  @ViewChild('addtionalComponentReference') additional!: AdditionalComponent;
  @ViewChild('photoComponentReference') photo!: PhotoComponent;
  @ViewChild('locationComponentReference') location!: LocationComponent;
  @ViewChild('contactComponentReference') contact!: ContactComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

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
        this.basic.firstNameInput.value = res.first_name;
        this.basic.lastNameInput.value = res.last_name;
        this.basic.locationInput.value = res.location;
        this.basic.aboutTextArea.value = res.about;
        this.contact.emailInput.value = res.email;
      },
      err => {
        console.log(err);
        this.connectionPrompt.toast.open();
      }
    )
  }

  getExtended(){
    this.settingsApi.getExtendedProfile()
      .subscribe(
        res => {
          console.log(res);
          this.additional.dobDateInput.value = res.date_of_birth;
          this.additional.genderDropDownList.value = res.gender;
          this.location.countrySelectInput.value = res.country;
          this.location.stateSelectInput.value = res.state;
          this.location.citySelectInput.value = res.city;
          this.contact.phoneInput.value = res.phone;
          this.contact.addressTextArea.value = res.address;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  sendUser(data: any){
    this.basic.saveButton.disabled = true;
    this.photo.saveButton.disabled = true;

    this.settingsApi.putUser(data)
      .subscribe(
        res => {
          console.log(res);
          this.basic.saveButton.disabled = false;
          this.photo.saveButton.disabled = false;
        },
        err => {
          console.log(err);
          this.basic.saveButton.disabled = false;
          this.photo.saveButton.disabled = false;

          this.connectionPrompt.toast.open();
        }
      )
  }

  // extended profile
  sendExtended(data: any){
    console.log(data);
    this.additional.saveButton.disabled = true;
    this.location.saveButton.disabled = true;
    this.contact.saveButton.disabled = true;

    this.settingsApi.putExtendedProfile(data)
      .subscribe(
        res => {
          console.log(res);
          this.additional.saveButton.disabled = false;
          this.location.saveButton.disabled = false;
          this.contact.saveButton.disabled = false;
        },
        err => {
          console.log(err);
          this.additional.saveButton.disabled = false;
          this.location.saveButton.disabled = false;
          this.contact.saveButton.disabled = false;
          
          this.connectionPrompt.toast.open();
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

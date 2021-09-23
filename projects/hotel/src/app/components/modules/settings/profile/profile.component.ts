import { Component, OnInit, ViewChild } from '@angular/core';

import { TabsComponent } from 'smart-webcomponents-angular/tabs';

import { BasicComponent } from '../profile-content/basic/basic.component';
import { LogoComponent } from '../profile-content/logo/logo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { SettingsApiService } from 'projects/hotel/src/app/services/modules/settings-api/settings-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('tabsReference', { read: TabsComponent, static: false }) tabs!: TabsComponent;

  @ViewChild('basicComponentReference') basic!: BasicComponent;
  @ViewChild('logoComponentReference') logo!: LogoComponent;
  @ViewChild('locationComponentReference') location!: LocationComponent;
  @ViewChild('contactComponentReference') contact!: ContactComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Profile", url: "/home/settings/profile" },
  ];

  ngOnInit(): void {
    this.getBasic();
    this.getExtended();
  }

  getBasic(){
  this.settingsApi.getAccount()
    .subscribe(
      res => {
        console.log(res);
        this.basic.nameInput.value = res.name;
        this.basic.locationInput.value = res.location;
        this.basic.aboutTextArea.value = res.about;
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
          this.location.countrySelectInput.value = res.country;
          this.location.stateSelectInput.value = res.state;
          this.location.citySelectInput.value = res.city;
          this.contact.emailInput.value = res.email;
          this.contact.phoneInput.value = res.phone;
          this.contact.addressTextArea.value = res.address;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  sendAccount(data: any){
    this.basic.saveButton.disabled = true;
    this.logo.saveButton.disabled = true;

    this.settingsApi.putAccount(data)
      .subscribe(
        res => {
          console.log(res);
          this.basic.saveButton.disabled = false;
          this.logo.saveButton.disabled = false;
        },
        err => {
          console.log(err);
          this.basic.saveButton.disabled = false;
          this.logo.saveButton.disabled = false;

          this.connectionPrompt.toast.open();
        }
      )
  }

  // extended profile
  sendExtended(data: any){
    console.log(data);
    this.location.saveButton.disabled = true;
    this.contact.saveButton.disabled = true;

    this.settingsApi.putExtendedProfile(data)
      .subscribe(
        res => {
          console.log(res);
          this.location.saveButton.disabled = false;
          this.contact.saveButton.disabled = false;
        },
        err => {
          console.log(err);
          this.location.saveButton.disabled = false;
          this.contact.saveButton.disabled = false;

          this.connectionPrompt.toast.open();
        }
      )
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

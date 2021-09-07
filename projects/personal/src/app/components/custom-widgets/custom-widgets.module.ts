import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DobInputComponent } from './dob-input/dob-input.component';
import { ProfileUploadComponent } from './profile-upload/profile-upload.component';
import { LogoUploadComponent } from './logo-upload/logo-upload.component';



@NgModule({
  declarations: [
    DobInputComponent,
    ProfileUploadComponent,
    LogoUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomWidgetsModule { }

// TODO: to be deleted

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { DobInputComponent } from './dob-input/dob-input.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';



@NgModule({
  declarations: [
    DobInputComponent,
    ImageUploadComponent,
  ],
  imports: [
    CommonModule,
    DropDownListModule
  ],
  exports: [
    DobInputComponent,
    ImageUploadComponent,
  ]
})
export class CustomWidgetsModule { }

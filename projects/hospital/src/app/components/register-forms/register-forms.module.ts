import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AuthFormsModule } from 'projects/personal/src/app/components/auth-forms/auth-forms.module';

import { RegisterFormComponent } from './register-form/register-form.component';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AuthFormsModule,
  ],
  exports: [
    RegisterFormComponent,
  ]
})
export class RegisterFormsModule { }

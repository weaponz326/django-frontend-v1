import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FormHeaderComponent } from './form-header/form-header.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { ResetFormComponent } from './reset-form/reset-form.component';



@NgModule({
  declarations: [
    FormHeaderComponent,
    FormFooterComponent,
    SignupFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    RecoveryFormComponent,
    ResetFormComponent
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
  ],
  exports: [
    FormHeaderComponent,
    FormFooterComponent,
  ]
})
export class AuthFormsModule { }

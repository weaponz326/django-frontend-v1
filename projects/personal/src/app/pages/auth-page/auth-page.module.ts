import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { AuthFormsModule } from '../../components/auth-forms/auth-forms.module';

import { AuthPageComponent } from './auth-page.component';


@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    MainNavbarModule,
    AuthFormsModule
  ]
})
export class AuthPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { RegisterFormsModule } from '../../components/register-forms/register-forms.module';

import { RegisterPageComponent } from './register-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    MainNavbarModule,
    RegisterFormsModule
  ]
})
export class RegisterPageModule { }

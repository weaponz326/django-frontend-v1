import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { AdminModule } from '../../../components/modules/admin/admin.module';

import { AdminPageComponent } from './admin-page.component';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    AdminModule,
  ]
})
export class AdminPageModule { }

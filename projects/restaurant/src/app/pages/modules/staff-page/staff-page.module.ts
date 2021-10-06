import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffPageRoutingModule } from './staff-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { StaffModule } from '../../../components/modules/staff/staff.module';

import { StaffPageComponent } from './staff-page.component';


@NgModule({
  declarations: [
    StaffPageComponent
  ],
  imports: [
    CommonModule,
    StaffPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    StaffModule,
  ]
})
export class StaffPageModule { }

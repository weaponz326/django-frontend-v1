import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterPageRoutingModule } from './roster-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { RosterModule } from '../../../components/modules/roster/roster.module';

import { RosterPageComponent } from './roster-page.component';


@NgModule({
  declarations: [
    RosterPageComponent
  ],
  imports: [
    CommonModule,
    RosterPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    RosterModule,
  ]
})
export class RosterPageModule { }

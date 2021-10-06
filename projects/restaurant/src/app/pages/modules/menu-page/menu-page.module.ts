import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageRoutingModule } from './menu-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { MenuModule } from '../../../components/modules/menu/menu.module';

import { MenuPageComponent } from './menu-page.component';


@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    MenuModule,
  ]
})
export class MenuPageModule { }

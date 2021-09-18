import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from '../../components/module-utilities/module-utilities.module';
import { ModuleHomeModule } from '../../components/module-home/module-home.module';

import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    ModuleHomeModule,
  ]
})
export class HomePageModule { }

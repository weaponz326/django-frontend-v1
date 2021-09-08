import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalPageRoutingModule } from './appraisal-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { AppraisalPageComponent } from './appraisal-page.component';


@NgModule({
  declarations: [
    AppraisalPageComponent
  ],
  imports: [
    CommonModule,
    AppraisalPageRoutingModule,
    MainNavbarModule,
  ]
})
export class AppraisalPageModule { }

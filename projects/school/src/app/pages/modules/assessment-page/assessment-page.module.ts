import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentPageRoutingModule } from './assessment-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { AssessmentPageComponent } from './assessment-page.component';


@NgModule({
  declarations: [
    AssessmentPageComponent
  ],
  imports: [
    CommonModule,
    AssessmentPageRoutingModule,
    MainNavbarModule,
  ]
})
export class AssessmentPageModule { }

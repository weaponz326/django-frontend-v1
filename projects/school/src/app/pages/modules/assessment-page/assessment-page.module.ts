import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentPageRoutingModule } from './assessment-page-routing.module';
import { AssessmentPageComponent } from './assessment-page.component';


@NgModule({
  declarations: [
    AssessmentPageComponent
  ],
  imports: [
    CommonModule,
    AssessmentPageRoutingModule
  ]
})
export class AssessmentPageModule { }

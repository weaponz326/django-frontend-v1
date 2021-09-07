import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalPageRoutingModule } from './appraisal-page-routing.module';
import { AppraisalPageComponent } from './appraisal-page.component';


@NgModule({
  declarations: [
    AppraisalPageComponent
  ],
  imports: [
    CommonModule,
    AppraisalPageRoutingModule
  ]
})
export class AppraisalPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainScrollnavComponent } from './main-scrollnav/main-scrollnav.component';
import { LandingTopComponent } from './landing-top/landing-top.component';
import { SuiteLeftComponent } from './suite-left/suite-left.component';
import { SuiteRightComponent } from './suite-right/suite-right.component';



@NgModule({
  declarations: [
    MainScrollnavComponent,
    LandingTopComponent,
    SuiteLeftComponent,
    SuiteRightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainScrollnavComponent,
    LandingTopComponent,
    SuiteLeftComponent,
    SuiteRightComponent,
  ]
})
export class MainLandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesPageRoutingModule } from './files-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { FilesPageComponent } from './files-page.component';


@NgModule({
  declarations: [
    FilesPageComponent
  ],
  imports: [
    CommonModule,
    FilesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class FilesPageModule { }

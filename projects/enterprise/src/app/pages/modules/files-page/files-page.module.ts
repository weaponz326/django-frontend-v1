import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesPageRoutingModule } from './files-page-routing.module';
import { FilesPageComponent } from './files-page.component';


@NgModule({
  declarations: [
    FilesPageComponent
  ],
  imports: [
    CommonModule,
    FilesPageRoutingModule
  ]
})
export class FilesPageModule { }

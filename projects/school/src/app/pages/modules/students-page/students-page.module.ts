import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageRoutingModule } from './students-page-routing.module';
import { StudentsPageComponent } from './students-page.component';


@NgModule({
  declarations: [
    StudentsPageComponent
  ],
  imports: [
    CommonModule,
    StudentsPageRoutingModule
  ]
})
export class StudentsPageModule { }

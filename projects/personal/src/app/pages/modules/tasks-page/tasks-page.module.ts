import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksPageRoutingModule } from './tasks-page-routing.module';
import { TasksPageComponent } from '../tasks-page.component';


@NgModule({
  declarations: [
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    TasksPageRoutingModule
  ]
})
export class TasksPageModule { }

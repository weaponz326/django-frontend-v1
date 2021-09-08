import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksPageRoutingModule } from './tasks-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { TasksPageComponent } from './tasks-page.component';


@NgModule({
  declarations: [
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    TasksPageRoutingModule,
    MainNavbarModule,
  ]
})
export class TasksPageModule { }

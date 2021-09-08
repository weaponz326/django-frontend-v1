import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteesPageRoutingModule } from './committees-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { CommitteesPageComponent } from './committees-page.component';


@NgModule({
  declarations: [
    CommitteesPageComponent
  ],
  imports: [
    CommonModule,
    CommitteesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class CommitteesPageModule { }

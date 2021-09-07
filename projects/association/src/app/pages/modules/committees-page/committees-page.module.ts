import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteesPageRoutingModule } from './committees-page-routing.module';
import { CommitteesPageComponent } from './committees-page.component';


@NgModule({
  declarations: [
    CommitteesPageComponent
  ],
  imports: [
    CommonModule,
    CommitteesPageRoutingModule
  ]
})
export class CommitteesPageModule { }

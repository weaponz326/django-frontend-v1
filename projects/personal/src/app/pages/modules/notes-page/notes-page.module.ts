import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesPageRoutingModule } from './notes-page-routing.module';
import { NotesPageComponent } from './notes-page.component';


@NgModule({
  declarations: [
    NotesPageComponent
  ],
  imports: [
    CommonModule,
    NotesPageRoutingModule
  ]
})
export class NotesPageModule { }

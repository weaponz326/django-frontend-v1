import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesPageRoutingModule } from './notes-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from '../../../components/module-utilities/module-utilities.module';
import { NotesModule } from '../../../components/modules/notes/notes.module';

import { NotesPageComponent } from './notes-page.component';


@NgModule({
  declarations: [
    NotesPageComponent
  ],
  imports: [
    CommonModule,
    NotesPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    NotesModule,
  ]
})
export class NotesPageModule { }

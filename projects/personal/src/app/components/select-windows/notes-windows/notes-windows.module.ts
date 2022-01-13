import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectNoteComponent } from './select-note/select-note.component';


@NgModule({
  declarations: [
    SelectNoteComponent
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectNoteComponent
  ]
})
export class NotesWindowsModule { }

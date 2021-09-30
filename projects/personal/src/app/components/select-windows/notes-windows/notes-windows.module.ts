import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectNoteComponent } from './select-note/select-note.component';



@NgModule({
  declarations: [
    SelectNoteComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectNoteComponent
  ]
})
export class NotesWindowsModule { }

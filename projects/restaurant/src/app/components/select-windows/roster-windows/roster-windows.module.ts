import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { SelectRosterComponent } from './select-roster/select-roster.component';



@NgModule({
  declarations: [
    SelectRosterComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectRosterComponent
  ]
})
export class RosterWindowsModule { }

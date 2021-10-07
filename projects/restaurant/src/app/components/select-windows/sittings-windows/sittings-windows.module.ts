import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { SelectSittingComponent } from './select-sitting/select-sitting.component';



@NgModule({
  declarations: [
    SelectSittingComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectSittingComponent
  ]
})
export class SittingsWindowsModule { }

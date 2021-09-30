import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectTaskComponent } from './select-task/select-task.component';



@NgModule({
  declarations: [
    SelectTaskComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectTaskComponent
  ]
})
export class TasksWindowsModule { }

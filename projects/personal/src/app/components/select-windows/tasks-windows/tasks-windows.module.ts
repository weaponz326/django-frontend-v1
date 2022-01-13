import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectTaskGroupComponent } from './select-task-group/select-task-group.component';
import { SelectTaskItemComponent } from './select-task-item/select-task-item.component';



@NgModule({
  declarations: [
    SelectTaskGroupComponent,
    SelectTaskItemComponent
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectTaskGroupComponent,
    SelectTaskItemComponent
  ]
})
export class TasksWindowsModule { }

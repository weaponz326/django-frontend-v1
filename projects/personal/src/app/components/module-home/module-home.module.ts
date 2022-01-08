import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModuleHomeComponent } from './module-home/module-home.component';



@NgModule({
  declarations: [
    ModuleHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ModuleHomeComponent,
  ]
})
export class ModuleHomeModule { }

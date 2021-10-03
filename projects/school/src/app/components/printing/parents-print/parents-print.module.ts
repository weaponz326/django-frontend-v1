import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllParentsPrintComponent } from './all-parents-print/all-parents-print.component';
import { ViewParentPrintComponent } from './view-parent-print/view-parent-print.component';



@NgModule({
  declarations: [
    AllParentsPrintComponent,
    ViewParentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParentsPrintModule { }

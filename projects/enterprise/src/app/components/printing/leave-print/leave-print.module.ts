import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLeavePrintComponent } from './all-leave-print/all-leave-print.component';
import { ViewLeavePrintComponent } from './view-leave-print/view-leave-print.component';



@NgModule({
  declarations: [
    AllLeavePrintComponent,
    ViewLeavePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeavePrintModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMembersPrintComponent } from './all-members-print/all-members-print.component';
import { ViewMemberPrintComponent } from './view-member-print/view-member-print.component';



@NgModule({
  declarations: [
    AllMembersPrintComponent,
    ViewMemberPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembersPrintModule { }

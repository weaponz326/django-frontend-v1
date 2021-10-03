import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommitteesPrintComponent } from './all-committees-print/all-committees-print.component';
import { ViewCommitteePrintComponent } from './view-committee-print/view-committee-print.component';



@NgModule({
  declarations: [
    AllCommitteesPrintComponent,
    ViewCommitteePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommitteesPrintModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLetterPrintComponent } from './view-letter-print/view-letter-print.component';
import { AllSentLettersPrintComponent } from './all-sent-letters-print/all-sent-letters-print.component';
import { AllReceivedLettersPrintComponent } from './all-received-letters-print/all-received-letters-print.component';



@NgModule({
  declarations: [
    ViewLetterPrintComponent,
    AllSentLettersPrintComponent,
    AllReceivedLettersPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LettersPrintModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSectionsPrintComponent } from './all-sections-print/all-sections-print.component';
import { ViewSectionPrintComponent } from './view-section-print/view-section-print.component';



@NgModule({
  declarations: [
    AllSectionsPrintComponent,
    ViewSectionPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsPrintModule { }

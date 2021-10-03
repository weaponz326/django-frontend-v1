import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProjectsPrintComponent } from './all-projects-print/all-projects-print.component';
import { ViewProjectPrintComponent } from './view-project-print/view-project-print.component';



@NgModule({
  declarations: [
    AllProjectsPrintComponent,
    ViewProjectPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsPrintModule { }

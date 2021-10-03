import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFoldersPrintComponent } from './all-folders-print/all-folders-print.component';
import { ViewFolderPrintComponent } from './view-folder-print/view-folder-print.component';
import { ViewFilePrintComponent } from './view-file-print/view-file-print.component';



@NgModule({
  declarations: [
    AllFoldersPrintComponent,
    ViewFolderPrintComponent,
    ViewFilePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilesPrintModule { }

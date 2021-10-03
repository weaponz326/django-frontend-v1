import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFileComponent } from './select-file/select-file.component';
import { SelectFolderComponent } from './select-folder/select-folder.component';



@NgModule({
  declarations: [
    SelectFileComponent,
    SelectFolderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilesWindowsModule { }

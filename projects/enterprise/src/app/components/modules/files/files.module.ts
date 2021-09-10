import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllFoldersComponent } from './all-folders/all-folders.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { ViewFolderComponent } from './view-folder/view-folder.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { AddFileComponent } from './add-file/add-file.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { FileFormComponent } from './file-form/file-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllFoldersComponent,
    NewFolderComponent,
    ViewFolderComponent,
    FilesTableComponent,
    AddFileComponent,
    ViewFileComponent,
    FileFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class FilesModule { }

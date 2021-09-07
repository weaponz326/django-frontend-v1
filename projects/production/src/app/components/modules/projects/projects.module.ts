import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { GanntViewComponent } from './gannt-view/gannt-view.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllProjectsComponent,
    NewProjectComponent,
    GanntViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }

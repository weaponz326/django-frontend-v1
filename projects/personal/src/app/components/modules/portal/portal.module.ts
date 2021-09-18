import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    NewRinkComponent,
    TimelineComponent,
    ViewRinkComponent,
    SearchViewComponent,
    SearchResultsComponent,
    SearchDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
  ]
})
export class PortalModule { }

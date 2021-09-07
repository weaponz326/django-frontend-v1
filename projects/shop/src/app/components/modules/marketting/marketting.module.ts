import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllCampaignsComponent } from './all-campaigns/all-campaigns.component';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllCampaignsComponent,
    NewCampaignComponent,
    ViewCampaignComponent,
    CampaignFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarkettingModule { }

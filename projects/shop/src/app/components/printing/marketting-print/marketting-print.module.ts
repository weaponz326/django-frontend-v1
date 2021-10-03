import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCampaignsPrintComponent } from './all-campaigns-print/all-campaigns-print.component';
import { ViewCampaignPrintComponent } from './view-campaign-print/view-campaign-print.component';



@NgModule({
  declarations: [
    AllCampaignsPrintComponent,
    ViewCampaignPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarkettingPrintModule { }

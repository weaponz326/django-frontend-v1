import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { NewAssetComponent } from './new-asset/new-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { AssetFormComponent } from './asset-form/asset-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAssetsComponent,
    NewAssetComponent,
    ViewAssetComponent,
    AssetFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class AssetsModule { }

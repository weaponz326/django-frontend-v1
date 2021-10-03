import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAssetsPrintComponent } from './all-assets-print/all-assets-print.component';
import { ViewAssetPrintComponent } from './view-asset-print/view-asset-print.component';



@NgModule({
  declarations: [
    AllAssetsPrintComponent,
    ViewAssetPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssetsPrintModule { }

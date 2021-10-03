import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMaterialsPrintComponent } from './all-materials-print/all-materials-print.component';
import { ViewMaterialPrintComponent } from './view-material-print/view-material-print.component';



@NgModule({
  declarations: [
    AllMaterialsPrintComponent,
    ViewMaterialPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialsPrintModule { }

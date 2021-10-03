import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEquipmentPrintComponent } from './all-equipment-print/all-equipment-print.component';
import { ViewEquipmentPrintComponent } from './view-equipment-print/view-equipment-print.component';



@NgModule({
  declarations: [
    AllEquipmentPrintComponent,
    ViewEquipmentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquipmentPrintModule { }

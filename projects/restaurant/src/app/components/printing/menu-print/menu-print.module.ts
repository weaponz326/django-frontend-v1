import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMenuPrintComponent } from './all-menu-print/all-menu-print.component';
import { ViewMenuPrintComponent } from './view-menu-print/view-menu-print.component';



@NgModule({
  declarations: [
    AllMenuPrintComponent,
    ViewMenuPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuPrintModule { }

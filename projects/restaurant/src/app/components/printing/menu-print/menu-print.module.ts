import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMenuPrintComponent } from './view-menu-print/view-menu-print.component';
import { AllMenuGroupsPrintComponent } from './all-menu-groups-print/all-menu-groups-print.component';
import { AllMenuItemsPrintComponent } from './all-menu-items-print/all-menu-items-print.component';



@NgModule({
  declarations: [
    ViewMenuPrintComponent,
    AllMenuGroupsPrintComponent,
    AllMenuItemsPrintComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewMenuPrintComponent,
    AllMenuGroupsPrintComponent,
    AllMenuItemsPrintComponent
  ],
})
export class MenuPrintModule { }

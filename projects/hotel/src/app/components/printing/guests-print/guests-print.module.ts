import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGuestsPrintComponent } from './all-guests-print/all-guests-print.component';
import { ViewGuestPrintComponent } from './view-guest-print/view-guest-print.component';



@NgModule({
  declarations: [
    AllGuestsPrintComponent,
    ViewGuestPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestsPrintModule { }

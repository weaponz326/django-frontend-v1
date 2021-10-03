import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFeesComponent } from './select-fees/select-fees.component';
import { SelectBillComponent } from './select-bill/select-bill.component';



@NgModule({
  declarations: [
    SelectFeesComponent,
    SelectBillComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeesWindowsModule { }

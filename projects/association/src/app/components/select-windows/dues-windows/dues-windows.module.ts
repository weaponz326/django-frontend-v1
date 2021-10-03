import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDuesComponent } from './select-dues/select-dues.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';



@NgModule({
  declarations: [
    SelectDuesComponent,
    SelectPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DuesWindowsModule { }

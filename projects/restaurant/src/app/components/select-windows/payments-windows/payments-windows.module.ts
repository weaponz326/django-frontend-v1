import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { SelectPaymentComponent } from './select-payment/select-payment.component';



@NgModule({
  declarations: [
    SelectPaymentComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    CommonModule
  ]
})
export class PaymentsWindowsModule { }

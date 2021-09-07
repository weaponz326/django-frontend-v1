import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivableComponent } from './receivable/receivable.component';
import { ProductComponent } from './product/product.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MarkettingComponent } from './marketting/marketting.component';
import { PayableComponent } from './payable/payable.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchasingComponent } from './purchasing/purchasing.component';
import { CashflowComponent } from './cashflow/cashflow.component';



@NgModule({
  declarations: [
    ReceivableComponent,
    ProductComponent,
    InvoiceComponent,
    MarkettingComponent,
    PayableComponent,
    SalesComponent,
    InventoryComponent,
    SupplierComponent,
    PurchasingComponent,
    CashflowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectWindowsModule { }

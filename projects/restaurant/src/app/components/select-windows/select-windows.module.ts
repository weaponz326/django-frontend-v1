import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { StaffComponent } from './staff/staff.component';
import { TableComponent } from './table/table.component';
import { CustomerComponent } from './customer/customer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { RosterComponent } from './roster/roster.component';
import { ReservationComponent } from './reservation/reservation.component';
import { OrderComponent } from './order/order.component';
import { KitchenStockComponent } from './kitchen-stock/kitchen-stock.component';
import { SittingComponent } from './sitting/sitting.component';



@NgModule({
  declarations: [
    MenuComponent,
    StaffComponent,
    TableComponent,
    CustomerComponent,
    DeliveryComponent,
    PaymentComponent,
    RosterComponent,
    ReservationComponent,
    OrderComponent,
    KitchenStockComponent,
    SittingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectWindowsModule { }

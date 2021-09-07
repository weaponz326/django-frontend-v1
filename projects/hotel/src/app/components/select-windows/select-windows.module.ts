import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill/bill.component';
import { GuestComponent } from './guest/guest.component';
import { ServiceComponent } from './service/service.component';
import { CheckinComponent } from './checkin/checkin.component';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { AssetComponent } from './asset/asset.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';



@NgModule({
  declarations: [
    BillComponent,
    GuestComponent,
    ServiceComponent,
    CheckinComponent,
    BookingComponent,
    RoomComponent,
    AssetComponent,
    HousekeepingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectWindowsModule { }

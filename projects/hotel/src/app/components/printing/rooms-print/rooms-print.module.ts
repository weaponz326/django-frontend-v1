import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoomsPrintComponent } from './all-rooms-print/all-rooms-print.component';
import { ViewRoomPrintComponent } from './view-room-print/view-room-print.component';



@NgModule({
  declarations: [
    AllRoomsPrintComponent,
    ViewRoomPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoomsPrintModule { }

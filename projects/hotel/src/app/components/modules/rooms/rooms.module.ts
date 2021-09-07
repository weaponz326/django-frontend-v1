import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { RoomFormComponent } from './room-form/room-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllRoomsComponent,
    NewRoomComponent,
    ViewRoomComponent,
    RoomFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoomsModule { }

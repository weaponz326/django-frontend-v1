import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

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
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class RoomsModule { }

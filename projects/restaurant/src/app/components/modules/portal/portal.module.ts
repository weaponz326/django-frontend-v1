import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { MenuWindowsModule } from '../../select-windows/menu-windows/menu-windows.module';
import { StaffWindowsModule } from '../../select-windows/staff-windows/staff-windows.module';
import { OrdersWindowsModule } from '../../select-windows/orders-windows/orders-windows.module';
import { DeliveriesWindowsModule } from '../../select-windows/deliveries-windows/deliveries-windows.module';
import { CustomersWindowsModule } from '../../select-windows/customers-windows/customers-windows.module';
import { ReservationsWindowsModule } from '../../select-windows/reservations-windows/reservations-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { MenuDetailsComponent } from './rink-details/menu-details/menu-details.component';
import { StaffDetailsComponent } from './rink-details/staff-details/staff-details.component';
import { CustomerDetailsComponent } from './rink-details/customer-details/customer-details.component';
import { ReservationDetailsComponent } from './rink-details/reservation-details/reservation-details.component';
import { OrderDetailsComponent } from './rink-details/order-details/order-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    SearchViewComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    NewRinkComponent,
    TimelineComponent,
    ViewRinkComponent,
    MenuDetailsComponent,
    StaffDetailsComponent,
    CustomerDetailsComponent,
    ReservationDetailsComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
    ModuleUtilitiesModule,
    MenuWindowsModule,
    StaffWindowsModule,
    OrdersWindowsModule,
    DeliveriesWindowsModule,
    CustomersWindowsModule,
    ReservationsWindowsModule,
  ]
})
export class PortalModule { }

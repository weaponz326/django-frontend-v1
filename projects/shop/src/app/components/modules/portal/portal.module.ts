import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { ProductDetailsComponent } from './rink-details/product-details/product-details.component';
import { InvoiceDetailsComponent } from './rink-details/invoice-details/invoice-details.component';
import { MarkettingDetailsComponent } from './rink-details/marketting-details/marketting-details.component';
import { CustomerDetailsComponent } from './rink-details/customer-details/customer-details.component';
import { OrderDetailsComponent } from './rink-details/order-details/order-details.component';
import { SupplierDetailsComponent } from './rink-details/supplier-details/supplier-details.component';
import { StaffDetailsComponent } from './rink-details/staff-details/staff-details.component';



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
    ProductDetailsComponent,
    InvoiceDetailsComponent,
    MarkettingDetailsComponent,
    CustomerDetailsComponent,
    OrderDetailsComponent,
    SupplierDetailsComponent,
    StaffDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
  ]
})
export class PortalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PurchasingComponent } from './purchasing/purchasing.component';
import { OrderComponent } from './order/order.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { ContractorComponent } from './contractor/contractor.component';
import { ProjectComponent } from './project/project.component';
import { WorkerComponent } from './worker/worker.component';
import { TaskComponent } from './task/task.component';
import { MaterialComponent } from './material/material.component';



@NgModule({
  declarations: [
    StockComponent,
    EquipmentComponent,
    PurchasingComponent,
    OrderComponent,
    ManufacturingComponent,
    ContractorComponent,
    ProjectComponent,
    WorkerComponent,
    TaskComponent,
    MaterialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StockComponent,
    EquipmentComponent,
    PurchasingComponent,
    OrderComponent,
    ManufacturingComponent,
    ContractorComponent,
    ProjectComponent,
    WorkerComponent,
    TaskComponent,
    MaterialComponent
  ]
})
export class SelectWindowsModule { }

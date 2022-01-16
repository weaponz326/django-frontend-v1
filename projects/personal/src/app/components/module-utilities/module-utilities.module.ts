

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'smart-webcomponents-angular/toast';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleSidenavComponent } from './module-sidenav/module-sidenav.component';
import { ModuleTopnavComponent } from './module-topnav/module-topnav.component';
import { ConnectionToastComponent } from './connection-toast/connection-toast.component';
import { AccessToastComponent } from './access-toast/access-toast.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ImageInputComponent } from './image-input/image-input.component';
import { BdayInputComponent } from './bday-input/bday-input.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';


@NgModule({
  declarations: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionToastComponent,
    AccessToastComponent,
    DeleteModalComponent,
    ImageInputComponent,
    BdayInputComponent,
    TablePaginationComponent,
    TableSortingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ToastModule,
    WindowModule,
  ],
  exports: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionToastComponent,
    AccessToastComponent,
    DeleteModalComponent,
    ImageInputComponent,
    BdayInputComponent,
    TablePaginationComponent,
    TableSortingComponent,
  ]
})
export class ModuleUtilitiesModule { }

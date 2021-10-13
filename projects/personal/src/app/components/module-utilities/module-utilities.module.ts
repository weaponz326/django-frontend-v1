import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToastModule } from 'smart-webcomponents-angular/toast';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleSidenavComponent } from './module-sidenav/module-sidenav.component';
import { ModuleTopnavComponent } from './module-topnav/module-topnav.component';
import { ConnectionPromptComponent } from './connection-prompt/connection-prompt.component';
import { AccessPromptComponent } from './access-prompt/access-prompt.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';


@NgModule({
  declarations: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionPromptComponent,
    AccessPromptComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    WindowModule,
  ],
  exports: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionPromptComponent,
    AccessPromptComponent,
    DeleteConfirmationComponent,
  ]
})
export class ModuleUtilitiesModule { }

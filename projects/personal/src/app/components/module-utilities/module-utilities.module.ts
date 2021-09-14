import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleSidenavComponent } from './module-sidenav/module-sidenav.component';
import { ModuleTopnavComponent } from './module-topnav/module-topnav.component';
import { ConnectionSpinnerComponent } from './connection-spinner/connection-spinner.component';
import { ConnectionPromptComponent } from './connection-prompt/connection-prompt.component';
import { AccessPromptComponent } from './access-prompt/access-prompt.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';



@NgModule({
  declarations: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionSpinnerComponent,
    ConnectionPromptComponent,
    AccessPromptComponent,
    DeleteConfirmationComponent,
    DashboardCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionSpinnerComponent,
    ConnectionPromptComponent,
    AccessPromptComponent,
    DeleteConfirmationComponent
  ]
})
export class ModuleUtilitiesModule { }

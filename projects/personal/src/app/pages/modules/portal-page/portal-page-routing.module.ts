import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalPageComponent } from './portal-page.component';
import { DashboardComponent } from '../../../components/modules/portal/dashboard/dashboard.component';
import { NewRinkComponent } from '../../../components/modules/portal/new-rink/new-rink.component';
import { SearchViewComponent } from '../../../components/modules/portal/search-view/search-view.component';
import { SettingsComponent } from '../../../components/modules/portal/settings/settings.component';
import { TimelineComponent } from '../../../components/modules/portal/timeline/timeline.component';
import { ViewRinkComponent } from '../../../components/modules/portal/view-rink/view-rink.component';

import { SendRinkGuard } from '../../../guards/modules/portal/send-rink.guard';
import { ViewRinkGuard } from '../../../guards/modules/portal/view-rink.guard';

const routes: Routes = [
  {
    path: "",
    component: PortalPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "timeline", component: TimelineComponent },
      { path: "new-rink", component: NewRinkComponent, canActivate: [SendRinkGuard] },
      { path: "search", component: SearchViewComponent },
      { path: "view-rink", component: ViewRinkComponent, canActivate: [ViewRinkGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalPageRoutingModule { }

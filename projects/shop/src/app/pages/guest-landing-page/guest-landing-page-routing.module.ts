import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestLandingPageComponent } from './guest-landing-page.component';

const routes: Routes = [
  { path: "", component: GuestLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestLandingPageRoutingModule { }

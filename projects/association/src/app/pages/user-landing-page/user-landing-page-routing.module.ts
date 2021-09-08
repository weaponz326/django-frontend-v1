import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLandingPageComponent } from './user-landing-page.component';

const routes: Routes = [
  { path: "", component: UserLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLandingPageRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/landing-page/landing-page.module").then(m => m.LandingPageModule)
  },
  {
    path: "auth",
    loadChildren: () => import("projects/personal/src/app/pages/auth-page/auth-page.module").then(m => m.AuthPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

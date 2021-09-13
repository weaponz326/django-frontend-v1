import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPageComponent } from './register-page.component';
import { RegisterFormComponent } from '../../components/register-forms/register-form/register-form.component';


const routes: Routes = [
  {
    path: "",
    component: RegisterPageComponent,
    children: [
      { path: "", component: RegisterFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule { }

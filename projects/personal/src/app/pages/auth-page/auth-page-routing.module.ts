import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from '../../components/auth-forms/login-form/login-form.component';
import { RecoveryFormComponent } from '../../components/auth-forms/recovery-form/recovery-form.component';
import { RegisterFormComponent } from '../../components/auth-forms/register-form/register-form.component';
import { ResetFormComponent } from '../../components/auth-forms/reset-form/reset-form.component';
import { SignupFormComponent } from '../../components/auth-forms/signup-form/signup-form.component';


const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "register", component: RegisterFormComponent },
  { path: "recovery", component: RecoveryFormComponent },
  { path: "reset", component: ResetFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule { }

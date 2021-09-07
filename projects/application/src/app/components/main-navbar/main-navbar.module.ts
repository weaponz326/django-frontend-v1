import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainNavbarComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainNavbarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LettersPageRoutingModule } from './letters-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { LettersPageComponent } from './letters-page.component';


@NgModule({
  declarations: [
    LettersPageComponent
  ],
  imports: [
    CommonModule,
    LettersPageRoutingModule,
    MainNavbarModule,
  ]
})
export class LettersPageModule { }

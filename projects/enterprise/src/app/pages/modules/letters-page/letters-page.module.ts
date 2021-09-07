import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LettersPageRoutingModule } from './letters-page-routing.module';
import { LettersPageComponent } from './letters-page.component';


@NgModule({
  declarations: [
    LettersPageComponent
  ],
  imports: [
    CommonModule,
    LettersPageRoutingModule
  ]
})
export class LettersPageModule { }

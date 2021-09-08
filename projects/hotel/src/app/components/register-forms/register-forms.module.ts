import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';



@NgModule({
  declarations: [
    RestaurantFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestaurantFormComponent
  ]
})
export class RegisterFormsModule { }

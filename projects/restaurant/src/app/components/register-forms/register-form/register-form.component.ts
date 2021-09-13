import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterApiService } from '../../../services/register-api/register-api.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private router: Router,
    private registerApi: RegisterApiService
  ) { }

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
  })

  isSending: boolean = false;
  showPrompt: boolean = false;

  nameErrors: any;
  locErrors: any;
  abtErrors: any;

  mergedData: any;       // for storing merged user id and register form profiles

  personalId: any = {
    personal_id: localStorage.getItem('personal_id')
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.mergedData = Object.assign(this.registerForm.value, this.personalId);
    console.log(this.mergedData);

    this.isSending = true;
    this.registerApi.postProfile(this.mergedData)
      .subscribe(
        res => {
          console.log(res);
          if(res.message == "OK"){
            this.showPrompt = true;
          }

          this.isSending = false;
        },
        err => {
          console.log(err);
          this.nameErrors = err.errors.name;
          this.locErrors = err.errors.location;
          this.abtErrors = err.errors.about;

          this.isSending = false;
        }
      )

    console.log(this.registerForm.value);
  }

  onAddressChange(address: any) {
    this.registerForm.controls.location = address.formatted_address;
    console.log(address);
  }

}

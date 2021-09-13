import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService
  ) { }

  registerForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
  })

  isSending: boolean = false;
  showPrompt: boolean = false;

  suiteRegistrationType = localStorage.getItem('suite_registration_type');

  fnErrors: any;
  lnErrors: any;
  locErrors: any;
  abtErrors: any;

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSending = true;
    this.authApi.postRegister(this.registerForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.showPrompt = true;
          this.isSending = false;
        },
        err => {
          console.log(err);
          this.fnErrors = err.errors.first_name;
          this.lnErrors = err.errors.last_name;
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

  registrationRedirect(){
    if(this.suiteRegistrationType == "Personal" || this.suiteRegistrationType == "Application"){
      this.router.navigateByUrl("/");
    }
    else{
      this.router.navigateByUrl("/register");
    }
  }

}

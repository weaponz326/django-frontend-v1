import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';
import { MainApiService } from 'projects/application/src/app/services/main-api/main-api.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private mainApi: MainApiService,
  ) { }

  @ViewChild('stepper') private signupStepper!: MatStepper;

  signupForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.required, Validators.min(8)]),
    password2: new FormControl('', [Validators.required, Validators.min(8)]),
  })

  isSending: boolean = false;
  showPrompt: boolean = false;

  suiteRegistrationType: string = "";

  fnErrors: any;
  lnErrors: any;
  locErrors: any;
  abtErrors: any;
  emailErrors: any;
  pass1Errors: any;
  pass2Errors: any;
  nfErrors: any;

  ngOnInit(): void {
    this.getSource();
  }

  getSource(){
    this.mainApi.getSource()
      .subscribe(
        res => {
          console.log(res);

          // this.suiteRegistrationType = res.user_source;
          this.suiteRegistrationType = sessionStorage.getItem('app_source') as string;
        },
        err => {
          console.log(err);
        }
      )
  }

  onSubmit(){
    this.isSending = true;
    this.authApi.postSignup(this.signupForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.key){
            localStorage.setItem('token', res.key);
            this.showPrompt = true;
          }
          this.isSending = false;
        },
        err => {
          console.log(err);
          this.fnErrors = err.errors?.first_name;
          this.lnErrors = err.errors?.last_name;
          this.locErrors = err.errors?.location;
          this.abtErrors = err.errors?.about;
          this.emailErrors = err.error?.email;
          this.pass1Errors = err.error?.password1;
          this.pass2Errors = err.error?.password2;
          this.nfErrors = err.error?.non_field_errors;

          this.isSending = false;
          // TODO: viewchid gives an error
          this.signupStepper.selectedIndex = 0;
        }
      )

    console.log(this.signupForm.value);
  }

  onAddressChange(address: any) {
    this.signupForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

  registrationRedirect(){
    // TODO: can't get auth_token if angular router is used
    if(this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink"){
      window.location.href = "/";
    }
    else{
      window.location.href = "/register";
    }
  }

}

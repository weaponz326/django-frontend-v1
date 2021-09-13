import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(private authApi: AuthApiService) { }

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.required, Validators.min(8)]),
    password2: new FormControl('', [Validators.required, Validators.min(8)]),
  })

  isSending: boolean = false;
  showPrompt: boolean = false;

  emailErrors: any;
  pass1Errors: any;
  pass2Errors: any;
  nfErrors: any;

  ngOnInit(): void {
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
          this.emailErrors = err.error.email;
          this.pass1Errors = err.error.password1;
          this.pass2Errors = err.error.password2;
          this.nfErrors = err.error.non_field_errors;

          this.isSending = false;
        }
      )

    console.log(this.signupForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  emailErrors: any;
  passErrors: any;
  nfErrors: any;

  isSending: boolean = false;
  showPrompt: boolean = false;

  suiteRegistrationType = localStorage.getItem('suite_registration_type');

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSending = true;
    this.authApi.postLogin(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (JSON.stringify(res).includes("key")){
            localStorage.setItem('token', res.key);

            if(this.suiteRegistrationType == "Personal" || this.suiteRegistrationType == "Application"){
              this.router.navigateByUrl( "/");
            }
            else{
              this.showPrompt = true;
            }
          }

          this.isSending = false;
        },
        err => {
          console.log(err);
          this.emailErrors = err.error.email;
          this.passErrors = err.error.password;
          this.nfErrors = err.error.non_field_errors;

          this.isSending = false;
        }
      )
  }

}

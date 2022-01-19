import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';
import { MainApiService } from 'projects/application/src/app/services/main-api/main-api.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService,
    private mainApi: MainApiService,
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

  suiteRegistrationType: string = "";

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
    this.authApi.postLogin(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (JSON.stringify(res).includes("key")){
            localStorage.setItem('token', res.key);

            // TODO: can't get auth_token if angular router is used
            if(this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink"){
              window.location.href = "/";
            }
            else{
              if(sessionStorage.getItem("is_suite_registration") == "OK"){
                this.showPrompt = true;
              }
              else{
                window.location.href = "/";
              }

              sessionStorage.removeItem("is_suite_registration");
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

  registrationRedirect(){
    // TODO: can't get auth_token if angular router is used    
    window.location.href = "/register";    
  }

}

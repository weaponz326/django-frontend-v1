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

  ngOnInit(): void {
  }

  onSubmit(){
    let personalData: any = {
      personal_id: localStorage.getItem('personal_id'),
      personal_name: sessionStorage.getItem('personal_name')
    }
    
    let mergedData = Object.assign(this.registerForm.value, personalData);
    console.log(mergedData);

    this.isSending = true;
    this.registerApi.postProfile(mergedData)
      .subscribe(
        res => {
          console.log(res);
          if(res.message == "OK"){
            this.showPrompt = true;
            localStorage.setItem('enterprise_id', res.data.id);
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
    this.registerForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

}

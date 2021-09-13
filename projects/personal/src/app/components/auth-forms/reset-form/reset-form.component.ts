import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';


@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  constructor(private authApi: AuthApiService) { }

  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.min(8)]),
    confirm: new FormControl('', [Validators.required, Validators.min(8)]),
  })

  isSending: boolean = false;
  showPrompt: boolean = false;

  pass1Errors: any;
  pass2Errors: any;
  nfErrors: any;

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSending = true;
    this.authApi.sendReset(this.resetForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.showPrompt = true;
          this.isSending = false;
        },
        err => {
          console.log(err);
          this.pass1Errors = err.error.password1;
          this.pass2Errors = err.error.password2;
          this.nfErrors = err.error.non_field_errors;

          this.isSending = false;
        }
      )
  }

}

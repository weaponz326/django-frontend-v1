import { Component, Input, OnInit } from '@angular/core';

import { SupportContactApiService } from 'projects/application/src/app/services/support-contact-api/support-contact-api.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private supportContactApi: SupportContactApiService) { }

  @Input() suiteName: string = "";

  name: string = "";
  email: string = "";
  message: string = "";

  isSending: boolean = false;
  isSubmitted: boolean = false;
  isFieldEmpty: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSending = true;

    let data = {
      name: this.name,
      email: this.email,
      message: this.message,
      source: this.suiteName
    }
    console.log(data);

    this.supportContactApi.postSupport(data)
      .subscribe(
        res => {
          console.log(res);

          if (res.message == "OK"){
            this.isFieldEmpty = false;
            this.isSubmitted = true;
            this.resetForm();
          }
          else{
            this.isFieldEmpty = true
          }

          this.isSending = false;
        },
        err => {
          console.log(err);

          this.isSending = false;
        }
      )
  }

  resetForm(){
    this.name = "";
    this.email = "";
    this.message = "";
  }

}

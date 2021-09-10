import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-top',
  templateUrl: './guest-top.component.html',
  styleUrls: ['./guest-top.component.scss']
})
export class GuestTopComponent implements OnInit {

  constructor() { }

  @Input() suiteName: string = "";
  @Input() primaryCaption: string = "";
  @Input() secondaryCaption: string = "";
  @Input() features: any;

  ngOnInit(): void {
  }

  createAccount(e: any){
    e.preventDefault();

  }

}

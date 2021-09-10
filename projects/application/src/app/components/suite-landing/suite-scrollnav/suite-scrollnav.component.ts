import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suite-scrollnav',
  templateUrl: './suite-scrollnav.component.html',
  styleUrls: ['./suite-scrollnav.component.scss']
})
export class SuiteScrollnavComponent implements OnInit {

  constructor() { }
  @Output() aboutEvent = new EventEmitter();
  @Output() pricingEvent = new EventEmitter();
  @Output() contactEvent = new EventEmitter();

  ngOnInit(): void {
  }

  onAboutClicked(e: any) {
    e.preventDefault();
    this.aboutEvent.emit();
  }

  onPricingClicked(e: any) {
    e.preventDefault();
    this.pricingEvent.emit();
  }

  onContactClicked(e: any) {
    e.preventDefault();
    this.contactEvent.emit();
  }

}

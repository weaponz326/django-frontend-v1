import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingPrintComponent } from './view-booking-print.component';

describe('ViewBookingPrintComponent', () => {
  let component: ViewBookingPrintComponent;
  let fixture: ComponentFixture<ViewBookingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

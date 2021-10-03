import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingsPrintComponent } from './all-bookings-print.component';

describe('AllBookingsPrintComponent', () => {
  let component: AllBookingsPrintComponent;
  let fixture: ComponentFixture<AllBookingsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBookingsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookingsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

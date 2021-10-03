import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReservationsPrintComponent } from './all-reservations-print.component';

describe('AllReservationsPrintComponent', () => {
  let component: AllReservationsPrintComponent;
  let fixture: ComponentFixture<AllReservationsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReservationsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReservationsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

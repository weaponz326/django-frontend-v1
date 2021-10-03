import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReservationPrintComponent } from './view-reservation-print.component';

describe('ViewReservationPrintComponent', () => {
  let component: ViewReservationPrintComponent;
  let fixture: ComponentFixture<ViewReservationPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReservationPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReservationPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

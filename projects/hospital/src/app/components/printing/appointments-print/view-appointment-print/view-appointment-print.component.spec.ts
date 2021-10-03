import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentPrintComponent } from './view-appointment-print.component';

describe('ViewAppointmentPrintComponent', () => {
  let component: ViewAppointmentPrintComponent;
  let fixture: ComponentFixture<ViewAppointmentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

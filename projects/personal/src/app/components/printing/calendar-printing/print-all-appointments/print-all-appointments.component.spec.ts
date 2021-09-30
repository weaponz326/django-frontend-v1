import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllAppointmentsComponent } from './print-all-appointments.component';

describe('PrintAllAppointmentsComponent', () => {
  let component: PrintAllAppointmentsComponent;
  let fixture: ComponentFixture<PrintAllAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAllAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAllAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

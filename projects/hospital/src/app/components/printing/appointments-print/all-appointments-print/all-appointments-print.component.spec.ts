import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppointmentsPrintComponent } from './all-appointments-print.component';

describe('AllAppointmentsPrintComponent', () => {
  let component: AllAppointmentsPrintComponent;
  let fixture: ComponentFixture<AllAppointmentsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAppointmentsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppointmentsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

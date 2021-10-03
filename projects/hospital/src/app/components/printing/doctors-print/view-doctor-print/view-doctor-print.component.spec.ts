import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorPrintComponent } from './view-doctor-print.component';

describe('ViewDoctorPrintComponent', () => {
  let component: ViewDoctorPrintComponent;
  let fixture: ComponentFixture<ViewDoctorPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

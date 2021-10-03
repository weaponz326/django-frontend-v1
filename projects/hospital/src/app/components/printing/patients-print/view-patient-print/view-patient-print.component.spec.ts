import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientPrintComponent } from './view-patient-print.component';

describe('ViewPatientPrintComponent', () => {
  let component: ViewPatientPrintComponent;
  let fixture: ComponentFixture<ViewPatientPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

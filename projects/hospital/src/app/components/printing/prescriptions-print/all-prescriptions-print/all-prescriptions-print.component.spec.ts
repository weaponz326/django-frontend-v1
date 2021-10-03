import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrescriptionsPrintComponent } from './all-prescriptions-print.component';

describe('AllPrescriptionsPrintComponent', () => {
  let component: AllPrescriptionsPrintComponent;
  let fixture: ComponentFixture<AllPrescriptionsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPrescriptionsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPrescriptionsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

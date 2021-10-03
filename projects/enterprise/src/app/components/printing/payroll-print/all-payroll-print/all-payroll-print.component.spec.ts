import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPayrollPrintComponent } from './all-payroll-print.component';

describe('AllPayrollPrintComponent', () => {
  let component: AllPayrollPrintComponent;
  let fixture: ComponentFixture<AllPayrollPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPayrollPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPayrollPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

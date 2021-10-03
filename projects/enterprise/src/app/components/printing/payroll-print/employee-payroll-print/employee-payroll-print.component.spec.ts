import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollPrintComponent } from './employee-payroll-print.component';

describe('EmployeePayrollPrintComponent', () => {
  let component: EmployeePayrollPrintComponent;
  let fixture: ComponentFixture<EmployeePayrollPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePayrollPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

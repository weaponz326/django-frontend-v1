import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPayrollPrintComponent } from './full-payroll-print.component';

describe('FullPayrollPrintComponent', () => {
  let component: FullPayrollPrintComponent;
  let fixture: ComponentFixture<FullPayrollPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPayrollPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPayrollPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

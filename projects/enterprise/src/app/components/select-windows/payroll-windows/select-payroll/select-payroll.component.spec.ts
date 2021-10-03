import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPayrollComponent } from './select-payroll.component';

describe('SelectPayrollComponent', () => {
  let component: SelectPayrollComponent;
  let fixture: ComponentFixture<SelectPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

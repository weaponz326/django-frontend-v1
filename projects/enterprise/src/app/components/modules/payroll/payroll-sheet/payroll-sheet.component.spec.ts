import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollSheetComponent } from './payroll-sheet.component';

describe('PayrollSheetComponent', () => {
  let component: PayrollSheetComponent;
  let fixture: ComponentFixture<PayrollSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

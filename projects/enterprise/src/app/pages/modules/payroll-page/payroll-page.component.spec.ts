import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollPageComponent } from './payroll-page.component';

describe('PayrollPageComponent', () => {
  let component: PayrollPageComponent;
  let fixture: ComponentFixture<PayrollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

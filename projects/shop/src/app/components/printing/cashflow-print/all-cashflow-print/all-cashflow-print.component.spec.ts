import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCashflowPrintComponent } from './all-cashflow-print.component';

describe('AllCashflowPrintComponent', () => {
  let component: AllCashflowPrintComponent;
  let fixture: ComponentFixture<AllCashflowPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCashflowPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCashflowPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

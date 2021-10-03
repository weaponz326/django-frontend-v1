import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaymentsPrintComponent } from './all-payments-print.component';

describe('AllPaymentsPrintComponent', () => {
  let component: AllPaymentsPrintComponent;
  let fixture: ComponentFixture<AllPaymentsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPaymentsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPaymentsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

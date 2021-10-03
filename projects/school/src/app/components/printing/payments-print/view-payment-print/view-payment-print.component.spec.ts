import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentPrintComponent } from './view-payment-print.component';

describe('ViewPaymentPrintComponent', () => {
  let component: ViewPaymentPrintComponent;
  let fixture: ComponentFixture<ViewPaymentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

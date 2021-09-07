import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesPaymentComponent } from './dues-payment.component';

describe('DuesPaymentComponent', () => {
  let component: DuesPaymentComponent;
  let fixture: ComponentFixture<DuesPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuesPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

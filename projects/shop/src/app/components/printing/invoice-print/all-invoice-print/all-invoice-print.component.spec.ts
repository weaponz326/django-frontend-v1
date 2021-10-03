import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInvoicePrintComponent } from './all-invoice-print.component';

describe('AllInvoicePrintComponent', () => {
  let component: AllInvoicePrintComponent;
  let fixture: ComponentFixture<AllInvoicePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInvoicePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInvoicePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

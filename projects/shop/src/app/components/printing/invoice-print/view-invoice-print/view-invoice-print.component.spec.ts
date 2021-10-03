import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoicePrintComponent } from './view-invoice-print.component';

describe('ViewInvoicePrintComponent', () => {
  let component: ViewInvoicePrintComponent;
  let fixture: ComponentFixture<ViewInvoicePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInvoicePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvoicePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

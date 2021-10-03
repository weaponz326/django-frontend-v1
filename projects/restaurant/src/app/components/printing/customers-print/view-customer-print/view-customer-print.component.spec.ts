import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerPrintComponent } from './view-customer-print.component';

describe('ViewCustomerPrintComponent', () => {
  let component: ViewCustomerPrintComponent;
  let fixture: ComponentFixture<ViewCustomerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

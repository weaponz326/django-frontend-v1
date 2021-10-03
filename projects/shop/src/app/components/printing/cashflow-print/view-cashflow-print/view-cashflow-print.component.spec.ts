import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCashflowPrintComponent } from './view-cashflow-print.component';

describe('ViewCashflowPrintComponent', () => {
  let component: ViewCashflowPrintComponent;
  let fixture: ComponentFixture<ViewCashflowPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCashflowPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCashflowPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

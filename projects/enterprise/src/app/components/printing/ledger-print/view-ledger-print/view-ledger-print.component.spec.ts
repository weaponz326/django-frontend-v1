import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLedgerPrintComponent } from './view-ledger-print.component';

describe('ViewLedgerPrintComponent', () => {
  let component: ViewLedgerPrintComponent;
  let fixture: ComponentFixture<ViewLedgerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLedgerPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLedgerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLedgerPrintComponent } from './all-ledger-print.component';

describe('AllLedgerPrintComponent', () => {
  let component: AllLedgerPrintComponent;
  let fixture: ComponentFixture<AllLedgerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLedgerPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLedgerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

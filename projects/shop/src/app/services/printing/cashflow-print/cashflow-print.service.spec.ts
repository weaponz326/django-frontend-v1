import { TestBed } from '@angular/core/testing';

import { CashflowPrintService } from './cashflow-print.service';

describe('CashflowPrintService', () => {
  let service: CashflowPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashflowPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

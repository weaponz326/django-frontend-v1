import { TestBed } from '@angular/core/testing';

import { LedgerPrintService } from './ledger-print.service';

describe('LedgerPrintService', () => {
  let service: LedgerPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgerPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

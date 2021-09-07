import { TestBed } from '@angular/core/testing';

import { LedgerGuard } from './ledger.guard';

describe('LedgerGuard', () => {
  let guard: LedgerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LedgerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

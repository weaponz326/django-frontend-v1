import { TestBed } from '@angular/core/testing';

import { CashflowGuard } from './cashflow.guard';

describe('CashflowGuard', () => {
  let guard: CashflowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CashflowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

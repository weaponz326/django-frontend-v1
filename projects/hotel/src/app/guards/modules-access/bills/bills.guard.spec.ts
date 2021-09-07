import { TestBed } from '@angular/core/testing';

import { BillsGuard } from './bills.guard';

describe('BillsGuard', () => {
  let guard: BillsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BillsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

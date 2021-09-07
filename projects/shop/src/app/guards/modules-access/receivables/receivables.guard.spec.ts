import { TestBed } from '@angular/core/testing';

import { ReceivablesGuard } from './receivables.guard';

describe('ReceivablesGuard', () => {
  let guard: ReceivablesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReceivablesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

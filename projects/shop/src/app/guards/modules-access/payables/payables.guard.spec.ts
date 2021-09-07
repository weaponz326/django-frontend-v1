import { TestBed } from '@angular/core/testing';

import { PayablesGuard } from './payables.guard';

describe('PayablesGuard', () => {
  let guard: PayablesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PayablesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

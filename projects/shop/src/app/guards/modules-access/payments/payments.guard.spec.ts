import { TestBed } from '@angular/core/testing';

import { PaymentsGuard } from './payments.guard';

describe('PaymentsGuard', () => {
  let guard: PaymentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

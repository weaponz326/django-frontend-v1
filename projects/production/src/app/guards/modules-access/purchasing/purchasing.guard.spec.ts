import { TestBed } from '@angular/core/testing';

import { PurchasingGuard } from './purchasing.guard';

describe('PurchasingGuard', () => {
  let guard: PurchasingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PurchasingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FeesGuard } from './fees.guard';

describe('FeesGuard', () => {
  let guard: FeesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

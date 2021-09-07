import { TestBed } from '@angular/core/testing';

import { DispensaryGuard } from './dispensary.guard';

describe('DispensaryGuard', () => {
  let guard: DispensaryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DispensaryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

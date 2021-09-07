import { TestBed } from '@angular/core/testing';

import { HousekeepingGuard } from './housekeeping.guard';

describe('HousekeepingGuard', () => {
  let guard: HousekeepingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HousekeepingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

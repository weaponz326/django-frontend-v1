import { TestBed } from '@angular/core/testing';

import { RosterGuard } from './roster.guard';

describe('RosterGuard', () => {
  let guard: RosterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RosterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

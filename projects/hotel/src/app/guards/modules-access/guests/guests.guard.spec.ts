import { TestBed } from '@angular/core/testing';

import { GuestsGuard } from './guests.guard';

describe('GuestsGuard', () => {
  let guard: GuestsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuestsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

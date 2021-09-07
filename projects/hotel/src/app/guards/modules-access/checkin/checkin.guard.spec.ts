import { TestBed } from '@angular/core/testing';

import { CheckinGuard } from './checkin.guard';

describe('CheckinGuard', () => {
  let guard: CheckinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

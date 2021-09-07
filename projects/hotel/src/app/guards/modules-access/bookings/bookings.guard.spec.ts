import { TestBed } from '@angular/core/testing';

import { BookingsGuard } from './bookings.guard';

describe('BookingsGuard', () => {
  let guard: BookingsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookingsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

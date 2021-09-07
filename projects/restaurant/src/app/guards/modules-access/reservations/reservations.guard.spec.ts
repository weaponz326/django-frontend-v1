import { TestBed } from '@angular/core/testing';

import { ReservationsGuard } from './reservations.guard';

describe('ReservationsGuard', () => {
  let guard: ReservationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReservationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

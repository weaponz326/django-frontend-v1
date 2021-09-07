import { TestBed } from '@angular/core/testing';

import { DoctorsGuard } from './doctors.guard';

describe('DoctorsGuard', () => {
  let guard: DoctorsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AttendanceGuard } from './attendance.guard';

describe('AttendanceGuard', () => {
  let guard: AttendanceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AttendanceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

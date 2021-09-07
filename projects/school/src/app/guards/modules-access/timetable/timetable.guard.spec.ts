import { TestBed } from '@angular/core/testing';

import { TimetableGuard } from './timetable.guard';

describe('TimetableGuard', () => {
  let guard: TimetableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TimetableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

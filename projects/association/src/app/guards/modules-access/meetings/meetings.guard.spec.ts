import { TestBed } from '@angular/core/testing';

import { MeetingsGuard } from './meetings.guard';

describe('MeetingsGuard', () => {
  let guard: MeetingsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MeetingsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

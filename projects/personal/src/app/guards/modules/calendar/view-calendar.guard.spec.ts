import { TestBed } from '@angular/core/testing';

import { ViewCalendarGuard } from './view-calendar.guard';

describe('ViewCalendarGuard', () => {
  let guard: ViewCalendarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewCalendarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

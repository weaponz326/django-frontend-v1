import { TestBed } from '@angular/core/testing';

import { YearGuard } from './year.guard';

describe('YearGuard', () => {
  let guard: YearGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YearGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

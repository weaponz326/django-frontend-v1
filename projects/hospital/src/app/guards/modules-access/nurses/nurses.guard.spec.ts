import { TestBed } from '@angular/core/testing';

import { NursesGuard } from './nurses.guard';

describe('NursesGuard', () => {
  let guard: NursesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NursesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TeachersGuard } from './teachers.guard';

describe('TeachersGuard', () => {
  let guard: TeachersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeachersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

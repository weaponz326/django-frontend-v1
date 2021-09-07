import { TestBed } from '@angular/core/testing';

import { StudentsGuard } from './students.guard';

describe('StudentsGuard', () => {
  let guard: StudentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

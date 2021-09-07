import { TestBed } from '@angular/core/testing';

import { ClassesGuard } from './classes.guard';

describe('ClassesGuard', () => {
  let guard: ClassesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClassesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

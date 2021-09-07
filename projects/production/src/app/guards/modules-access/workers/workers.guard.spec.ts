import { TestBed } from '@angular/core/testing';

import { WorkersGuard } from './workers.guard';

describe('WorkersGuard', () => {
  let guard: WorkersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

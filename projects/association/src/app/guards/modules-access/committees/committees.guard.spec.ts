import { TestBed } from '@angular/core/testing';

import { CommitteesGuard } from './committees.guard';

describe('CommitteesGuard', () => {
  let guard: CommitteesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommitteesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

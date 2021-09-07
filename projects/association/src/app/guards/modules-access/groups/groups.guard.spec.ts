import { TestBed } from '@angular/core/testing';

import { GroupsGuard } from './groups.guard';

describe('GroupsGuard', () => {
  let guard: GroupsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GroupsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

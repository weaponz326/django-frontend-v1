import { TestBed } from '@angular/core/testing';

import { MembersGuard } from './members.guard';

describe('MembersGuard', () => {
  let guard: MembersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MembersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

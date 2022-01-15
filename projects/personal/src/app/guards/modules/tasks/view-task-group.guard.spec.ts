import { TestBed } from '@angular/core/testing';

import { ViewTaskGroupGuard } from './view-task-group.guard';

describe('ViewTaskGroupGuard', () => {
  let guard: ViewTaskGroupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewTaskGroupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

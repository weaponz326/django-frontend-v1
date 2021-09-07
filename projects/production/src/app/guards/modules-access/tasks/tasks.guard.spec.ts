import { TestBed } from '@angular/core/testing';

import { TasksGuard } from './tasks.guard';

describe('TasksGuard', () => {
  let guard: TasksGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TasksGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

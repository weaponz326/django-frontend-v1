import { TestBed } from '@angular/core/testing';

import { AppraisalGuard } from './appraisal.guard';

describe('AppraisalGuard', () => {
  let guard: AppraisalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppraisalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

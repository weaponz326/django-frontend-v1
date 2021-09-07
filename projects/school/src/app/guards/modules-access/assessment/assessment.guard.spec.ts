import { TestBed } from '@angular/core/testing';

import { AssessmentGuard } from './assessment.guard';

describe('AssessmentGuard', () => {
  let guard: AssessmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssessmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

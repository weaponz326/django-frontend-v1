import { TestBed } from '@angular/core/testing';

import { AssessmentPrintService } from './assessment-print.service';

describe('AssessmentPrintService', () => {
  let service: AssessmentPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

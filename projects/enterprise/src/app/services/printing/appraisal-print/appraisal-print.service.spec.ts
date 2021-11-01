import { TestBed } from '@angular/core/testing';

import { AppraisalPrintService } from './appraisal-print.service';

describe('AppraisalPrintService', () => {
  let service: AppraisalPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppraisalPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReportsPrintService } from './reports-print.service';

describe('ReportsPrintService', () => {
  let service: ReportsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

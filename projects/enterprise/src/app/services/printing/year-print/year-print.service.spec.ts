import { TestBed } from '@angular/core/testing';

import { YearPrintService } from './year-print.service';

describe('YearPrintService', () => {
  let service: YearPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

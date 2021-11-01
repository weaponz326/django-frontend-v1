import { TestBed } from '@angular/core/testing';

import { DispensaryPrintService } from './dispensary-print.service';

describe('DispensaryPrintService', () => {
  let service: DispensaryPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensaryPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

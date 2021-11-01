import { TestBed } from '@angular/core/testing';

import { ProcurementPrintService } from './procurement-print.service';

describe('ProcurementPrintService', () => {
  let service: ProcurementPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcurementPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

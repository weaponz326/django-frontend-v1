import { TestBed } from '@angular/core/testing';

import { PayrollPrintService } from './payroll-print.service';

describe('PayrollPrintService', () => {
  let service: PayrollPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

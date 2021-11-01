import { TestBed } from '@angular/core/testing';

import { InvoicePrintService } from './invoice-print.service';

describe('InvoicePrintService', () => {
  let service: InvoicePrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicePrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

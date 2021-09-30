import { TestBed } from '@angular/core/testing';

import { PdfPrintService } from './pdf-print.service';

describe('PdfPrintService', () => {
  let service: PdfPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

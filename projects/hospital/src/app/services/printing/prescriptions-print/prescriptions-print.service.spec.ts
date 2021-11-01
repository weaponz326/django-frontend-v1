import { TestBed } from '@angular/core/testing';

import { PrescriptionsPrintService } from './prescriptions-print.service';

describe('PrescriptionsPrintService', () => {
  let service: PrescriptionsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

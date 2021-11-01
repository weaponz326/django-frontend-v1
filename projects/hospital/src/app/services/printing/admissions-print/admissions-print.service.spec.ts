import { TestBed } from '@angular/core/testing';

import { AdmissionsPrintService } from './admissions-print.service';

describe('AdmissionsPrintService', () => {
  let service: AdmissionsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

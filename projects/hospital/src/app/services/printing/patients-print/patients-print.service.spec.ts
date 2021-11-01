import { TestBed } from '@angular/core/testing';

import { PatientsPrintService } from './patients-print.service';

describe('PatientsPrintService', () => {
  let service: PatientsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

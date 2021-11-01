import { TestBed } from '@angular/core/testing';

import { DoctorsPrintService } from './doctors-print.service';

describe('DoctorsPrintService', () => {
  let service: DoctorsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

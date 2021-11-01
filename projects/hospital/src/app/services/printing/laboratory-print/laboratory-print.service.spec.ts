import { TestBed } from '@angular/core/testing';

import { LaboratoryPrintService } from './laboratory-print.service';

describe('LaboratoryPrintService', () => {
  let service: LaboratoryPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoryPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

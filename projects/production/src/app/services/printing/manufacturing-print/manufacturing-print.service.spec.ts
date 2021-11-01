import { TestBed } from '@angular/core/testing';

import { ManufacturingPrintService } from './manufacturing-print.service';

describe('ManufacturingPrintService', () => {
  let service: ManufacturingPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManufacturingPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HousekeepingPrintService } from './housekeeping-print.service';

describe('HousekeepingPrintService', () => {
  let service: HousekeepingPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousekeepingPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

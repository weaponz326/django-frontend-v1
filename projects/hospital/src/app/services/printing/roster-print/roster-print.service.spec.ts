import { TestBed } from '@angular/core/testing';

import { RosterPrintService } from './roster-print.service';

describe('RosterPrintService', () => {
  let service: RosterPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

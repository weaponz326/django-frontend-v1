import { TestBed } from '@angular/core/testing';

import { CheckinPrintService } from './checkin-print.service';

describe('CheckinPrintService', () => {
  let service: CheckinPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

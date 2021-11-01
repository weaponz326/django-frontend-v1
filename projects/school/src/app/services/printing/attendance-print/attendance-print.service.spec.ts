import { TestBed } from '@angular/core/testing';

import { AttendancePrintService } from './attendance-print.service';

describe('AttendancePrintService', () => {
  let service: AttendancePrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendancePrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

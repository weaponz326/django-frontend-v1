import { TestBed } from '@angular/core/testing';

import { LeavePrintService } from './leave-print.service';

describe('LeavePrintService', () => {
  let service: LeavePrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavePrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StaffPrintService } from './staff-print.service';

describe('StaffPrintService', () => {
  let service: StaffPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReceptionPrintService } from './reception-print.service';

describe('ReceptionPrintService', () => {
  let service: ReceptionPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

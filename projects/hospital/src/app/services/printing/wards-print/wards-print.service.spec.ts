import { TestBed } from '@angular/core/testing';

import { WardsPrintService } from './wards-print.service';

describe('WardsPrintService', () => {
  let service: WardsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

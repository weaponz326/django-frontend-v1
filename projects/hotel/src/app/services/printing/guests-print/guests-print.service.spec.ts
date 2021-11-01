import { TestBed } from '@angular/core/testing';

import { GuestsPrintService } from './guests-print.service';

describe('GuestsPrintService', () => {
  let service: GuestsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

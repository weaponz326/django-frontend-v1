import { TestBed } from '@angular/core/testing';

import { ReservationsPrintService } from './reservations-print.service';

describe('ReservationsPrintService', () => {
  let service: ReservationsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

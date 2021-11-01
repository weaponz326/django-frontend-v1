import { TestBed } from '@angular/core/testing';

import { BookingsPrintService } from './bookings-print.service';

describe('BookingsPrintService', () => {
  let service: BookingsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

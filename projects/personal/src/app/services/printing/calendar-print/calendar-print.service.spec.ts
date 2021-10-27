import { TestBed } from '@angular/core/testing';

import { CalendarPrintService } from './calendar-print.service';

describe('CalendarPrintService', () => {
  let service: CalendarPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

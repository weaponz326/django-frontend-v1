import { TestBed } from '@angular/core/testing';

import { TimetablePrintService } from './timetable-print.service';

describe('TimetablePrintService', () => {
  let service: TimetablePrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetablePrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

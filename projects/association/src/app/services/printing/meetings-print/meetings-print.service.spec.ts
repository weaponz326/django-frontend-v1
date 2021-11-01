import { TestBed } from '@angular/core/testing';

import { MeetingsPrintService } from './meetings-print.service';

describe('MeetingsPrintService', () => {
  let service: MeetingsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

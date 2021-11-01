import { TestBed } from '@angular/core/testing';

import { AppointmentsPrintService } from './appointments-print.service';

describe('AppointmentsPrintService', () => {
  let service: AppointmentsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

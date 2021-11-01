import { TestBed } from '@angular/core/testing';

import { EmployeesPrintService } from './employees-print.service';

describe('EmployeesPrintService', () => {
  let service: EmployeesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

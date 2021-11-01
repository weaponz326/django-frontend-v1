import { TestBed } from '@angular/core/testing';

import { StudentsPrintService } from './students-print.service';

describe('StudentsPrintService', () => {
  let service: StudentsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

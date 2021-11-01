import { TestBed } from '@angular/core/testing';

import { TeachersPrintService } from './teachers-print.service';

describe('TeachersPrintService', () => {
  let service: TeachersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

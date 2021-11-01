import { TestBed } from '@angular/core/testing';

import { SubjectsPrintService } from './subjects-print.service';

describe('SubjectsPrintService', () => {
  let service: SubjectsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

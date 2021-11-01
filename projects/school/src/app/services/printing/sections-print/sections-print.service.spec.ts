import { TestBed } from '@angular/core/testing';

import { SectionsPrintService } from './sections-print.service';

describe('SectionsPrintService', () => {
  let service: SectionsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

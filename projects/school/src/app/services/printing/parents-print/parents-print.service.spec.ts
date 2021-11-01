import { TestBed } from '@angular/core/testing';

import { ParentsPrintService } from './parents-print.service';

describe('ParentsPrintService', () => {
  let service: ParentsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

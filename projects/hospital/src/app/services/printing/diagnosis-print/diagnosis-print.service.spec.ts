import { TestBed } from '@angular/core/testing';

import { DiagnosisPrintService } from './diagnosis-print.service';

describe('DiagnosisPrintService', () => {
  let service: DiagnosisPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

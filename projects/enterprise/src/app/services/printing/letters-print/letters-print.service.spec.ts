import { TestBed } from '@angular/core/testing';

import { LettersPrintService } from './letters-print.service';

describe('LettersPrintService', () => {
  let service: LettersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LettersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

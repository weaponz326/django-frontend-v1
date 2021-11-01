import { TestBed } from '@angular/core/testing';

import { ClassesPrintService } from './classes-print.service';

describe('ClassesPrintService', () => {
  let service: ClassesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

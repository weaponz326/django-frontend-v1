import { TestBed } from '@angular/core/testing';

import { NotesPrintService } from './notes-print.service';

describe('NotesPrintService', () => {
  let service: NotesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ViewNoteGuard } from './view-note.guard';

describe('ViewNoteGuard', () => {
  let guard: ViewNoteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewNoteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

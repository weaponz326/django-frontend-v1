import { TestBed } from '@angular/core/testing';

import { FilesGuard } from './files.guard';

describe('FilesGuard', () => {
  let guard: FilesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

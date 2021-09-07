import { TestBed } from '@angular/core/testing';

import { LettersGuard } from './letters.guard';

describe('LettersGuard', () => {
  let guard: LettersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LettersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EquipmentGuard } from './equipment.guard';

describe('EquipmentGuard', () => {
  let guard: EquipmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EquipmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

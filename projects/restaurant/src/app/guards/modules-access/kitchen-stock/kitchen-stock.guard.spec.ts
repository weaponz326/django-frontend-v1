import { TestBed } from '@angular/core/testing';

import { KitchenStockGuard } from './kitchen-stock.guard';

describe('KitchenStockGuard', () => {
  let guard: KitchenStockGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KitchenStockGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

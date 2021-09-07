import { TestBed } from '@angular/core/testing';

import { KitchenStockApiService } from './kitchen-stock-api.service';

describe('KitchenStockApiService', () => {
  let service: KitchenStockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenStockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

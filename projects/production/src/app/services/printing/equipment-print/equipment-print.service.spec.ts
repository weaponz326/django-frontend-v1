import { TestBed } from '@angular/core/testing';

import { EquipmentPrintService } from './equipment-print.service';

describe('EquipmentPrintService', () => {
  let service: EquipmentPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

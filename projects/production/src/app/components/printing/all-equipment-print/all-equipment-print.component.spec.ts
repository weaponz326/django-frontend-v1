import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEquipmentPrintComponent } from './all-equipment-print.component';

describe('AllEquipmentPrintComponent', () => {
  let component: AllEquipmentPrintComponent;
  let fixture: ComponentFixture<AllEquipmentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEquipmentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEquipmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

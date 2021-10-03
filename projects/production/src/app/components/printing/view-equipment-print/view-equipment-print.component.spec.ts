import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEquipmentPrintComponent } from './view-equipment-print.component';

describe('ViewEquipmentPrintComponent', () => {
  let component: ViewEquipmentPrintComponent;
  let fixture: ComponentFixture<ViewEquipmentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEquipmentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEquipmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

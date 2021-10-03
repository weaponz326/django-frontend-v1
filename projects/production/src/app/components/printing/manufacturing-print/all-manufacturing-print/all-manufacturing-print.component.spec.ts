import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllManufacturingPrintComponent } from './all-manufacturing-print.component';

describe('AllManufacturingPrintComponent', () => {
  let component: AllManufacturingPrintComponent;
  let fixture: ComponentFixture<AllManufacturingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllManufacturingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllManufacturingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

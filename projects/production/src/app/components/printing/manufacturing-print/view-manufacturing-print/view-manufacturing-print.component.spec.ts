import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManufacturingPrintComponent } from './view-manufacturing-print.component';

describe('ViewManufacturingPrintComponent', () => {
  let component: ViewManufacturingPrintComponent;
  let fixture: ComponentFixture<ViewManufacturingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewManufacturingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManufacturingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

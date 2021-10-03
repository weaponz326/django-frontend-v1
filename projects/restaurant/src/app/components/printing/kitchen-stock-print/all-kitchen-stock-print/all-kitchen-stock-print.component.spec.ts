import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKitchenStockPrintComponent } from './all-kitchen-stock-print.component';

describe('AllKitchenStockPrintComponent', () => {
  let component: AllKitchenStockPrintComponent;
  let fixture: ComponentFixture<AllKitchenStockPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllKitchenStockPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKitchenStockPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

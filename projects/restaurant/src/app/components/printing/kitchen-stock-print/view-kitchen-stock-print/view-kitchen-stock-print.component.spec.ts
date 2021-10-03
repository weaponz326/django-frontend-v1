import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKitchenStockPrintComponent } from './view-kitchen-stock-print.component';

describe('ViewKitchenStockPrintComponent', () => {
  let component: ViewKitchenStockPrintComponent;
  let fixture: ComponentFixture<ViewKitchenStockPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKitchenStockPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKitchenStockPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

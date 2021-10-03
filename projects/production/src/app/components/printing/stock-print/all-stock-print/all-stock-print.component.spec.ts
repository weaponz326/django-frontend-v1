import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStockPrintComponent } from './all-stock-print.component';

describe('AllStockPrintComponent', () => {
  let component: AllStockPrintComponent;
  let fixture: ComponentFixture<AllStockPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStockPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStockPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

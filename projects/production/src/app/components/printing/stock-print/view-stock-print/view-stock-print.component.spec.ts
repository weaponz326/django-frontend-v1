import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockPrintComponent } from './view-stock-print.component';

describe('ViewStockPrintComponent', () => {
  let component: ViewStockPrintComponent;
  let fixture: ComponentFixture<ViewStockPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStockPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStockPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

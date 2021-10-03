import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderPrintComponent } from './view-order-print.component';

describe('ViewOrderPrintComponent', () => {
  let component: ViewOrderPrintComponent;
  let fixture: ComponentFixture<ViewOrderPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

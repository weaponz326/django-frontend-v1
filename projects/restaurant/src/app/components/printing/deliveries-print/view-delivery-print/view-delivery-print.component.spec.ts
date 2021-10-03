import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveryPrintComponent } from './view-delivery-print.component';

describe('ViewDeliveryPrintComponent', () => {
  let component: ViewDeliveryPrintComponent;
  let fixture: ComponentFixture<ViewDeliveryPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeliveryPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeliveryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPurchasingPrintComponent } from './view-purchasing-print.component';

describe('ViewPurchasingPrintComponent', () => {
  let component: ViewPurchasingPrintComponent;
  let fixture: ComponentFixture<ViewPurchasingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPurchasingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPurchasingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

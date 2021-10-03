import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurchasingPrintComponent } from './all-purchasing-print.component';

describe('AllPurchasingPrintComponent', () => {
  let component: AllPurchasingPrintComponent;
  let fixture: ComponentFixture<AllPurchasingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPurchasingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchasingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSalesPrintComponent } from './all-sales-print.component';

describe('AllSalesPrintComponent', () => {
  let component: AllSalesPrintComponent;
  let fixture: ComponentFixture<AllSalesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSalesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSalesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

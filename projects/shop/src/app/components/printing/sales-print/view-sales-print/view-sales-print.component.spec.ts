import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesPrintComponent } from './view-sales-print.component';

describe('ViewSalesPrintComponent', () => {
  let component: ViewSalesPrintComponent;
  let fixture: ComponentFixture<ViewSalesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

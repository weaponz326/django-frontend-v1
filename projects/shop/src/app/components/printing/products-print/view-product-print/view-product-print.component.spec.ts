import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductPrintComponent } from './view-product-print.component';

describe('ViewProductPrintComponent', () => {
  let component: ViewProductPrintComponent;
  let fixture: ComponentFixture<ViewProductPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

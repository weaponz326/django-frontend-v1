import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierPrintComponent } from './view-supplier-print.component';

describe('ViewSupplierPrintComponent', () => {
  let component: ViewSupplierPrintComponent;
  let fixture: ComponentFixture<ViewSupplierPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSupplierPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

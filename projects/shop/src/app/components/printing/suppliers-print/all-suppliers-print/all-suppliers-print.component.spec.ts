import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSuppliersPrintComponent } from './all-suppliers-print.component';

describe('AllSuppliersPrintComponent', () => {
  let component: AllSuppliersPrintComponent;
  let fixture: ComponentFixture<AllSuppliersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSuppliersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSuppliersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

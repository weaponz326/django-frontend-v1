import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProcurementPrintComponent } from './all-procurement-print.component';

describe('AllProcurementPrintComponent', () => {
  let component: AllProcurementPrintComponent;
  let fixture: ComponentFixture<AllProcurementPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProcurementPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProcurementPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

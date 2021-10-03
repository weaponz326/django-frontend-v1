import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementPrintComponent } from './view-procurement-print.component';

describe('ViewProcurementPrintComponent', () => {
  let component: ViewProcurementPrintComponent;
  let fixture: ComponentFixture<ViewProcurementPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProcurementPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

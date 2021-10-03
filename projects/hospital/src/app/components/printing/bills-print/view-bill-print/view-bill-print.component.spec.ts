import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillPrintComponent } from './view-bill-print.component';

describe('ViewBillPrintComponent', () => {
  let component: ViewBillPrintComponent;
  let fixture: ComponentFixture<ViewBillPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBillPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

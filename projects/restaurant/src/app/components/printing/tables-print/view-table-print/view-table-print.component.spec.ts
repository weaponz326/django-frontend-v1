import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTablePrintComponent } from './view-table-print.component';

describe('ViewTablePrintComponent', () => {
  let component: ViewTablePrintComponent;
  let fixture: ComponentFixture<ViewTablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTablePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

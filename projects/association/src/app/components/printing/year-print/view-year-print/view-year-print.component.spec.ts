import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYearPrintComponent } from './view-year-print.component';

describe('ViewYearPrintComponent', () => {
  let component: ViewYearPrintComponent;
  let fixture: ComponentFixture<ViewYearPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewYearPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewYearPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

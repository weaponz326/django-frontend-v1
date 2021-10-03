import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitorPrintComponent } from './view-visitor-print.component';

describe('ViewVisitorPrintComponent', () => {
  let component: ViewVisitorPrintComponent;
  let fixture: ComponentFixture<ViewVisitorPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitorPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVisitorPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

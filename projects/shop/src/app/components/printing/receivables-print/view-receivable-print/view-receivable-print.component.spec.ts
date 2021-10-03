import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceivablePrintComponent } from './view-receivable-print.component';

describe('ViewReceivablePrintComponent', () => {
  let component: ViewReceivablePrintComponent;
  let fixture: ComponentFixture<ViewReceivablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReceivablePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReceivablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

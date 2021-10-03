import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheckinPrintComponent } from './view-checkin-print.component';

describe('ViewCheckinPrintComponent', () => {
  let component: ViewCheckinPrintComponent;
  let fixture: ComponentFixture<ViewCheckinPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCheckinPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCheckinPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

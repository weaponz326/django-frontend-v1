import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetingPrintComponent } from './view-meeting-print.component';

describe('ViewMeetingPrintComponent', () => {
  let component: ViewMeetingPrintComponent;
  let fixture: ComponentFixture<ViewMeetingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMeetingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMeetingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

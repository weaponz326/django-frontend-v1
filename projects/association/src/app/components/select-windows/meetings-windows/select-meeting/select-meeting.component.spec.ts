import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMeetingComponent } from './select-meeting.component';

describe('SelectMeetingComponent', () => {
  let component: SelectMeetingComponent;
  let fixture: ComponentFixture<SelectMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeetingsPrintComponent } from './all-meetings-print.component';

describe('AllMeetingsPrintComponent', () => {
  let component: AllMeetingsPrintComponent;
  let fixture: ComponentFixture<AllMeetingsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMeetingsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMeetingsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

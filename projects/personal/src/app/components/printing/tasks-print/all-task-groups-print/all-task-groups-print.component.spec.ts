import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskGroupsPrintComponent } from './all-task-groups-print.component';

describe('AllTaskGroupsPrintComponent', () => {
  let component: AllTaskGroupsPrintComponent;
  let fixture: ComponentFixture<AllTaskGroupsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTaskGroupsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTaskGroupsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

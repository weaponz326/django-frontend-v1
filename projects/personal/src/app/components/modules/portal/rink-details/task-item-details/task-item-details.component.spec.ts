import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemDetailsComponent } from './task-item-details.component';

describe('TaskItemDetailsComponent', () => {
  let component: TaskItemDetailsComponent;
  let fixture: ComponentFixture<TaskItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGroupDetailsComponent } from './task-group-details.component';

describe('TaskGroupDetailsComponent', () => {
  let component: TaskGroupDetailsComponent;
  let fixture: ComponentFixture<TaskGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskGroupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

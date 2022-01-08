import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskGroupComponent } from './new-task-group.component';

describe('NewTaskGroupComponent', () => {
  let component: NewTaskGroupComponent;
  let fixture: ComponentFixture<NewTaskGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

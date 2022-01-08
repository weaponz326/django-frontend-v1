import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskGroupComponent } from './view-task-group.component';

describe('ViewTaskGroupComponent', () => {
  let component: ViewTaskGroupComponent;
  let fixture: ComponentFixture<ViewTaskGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

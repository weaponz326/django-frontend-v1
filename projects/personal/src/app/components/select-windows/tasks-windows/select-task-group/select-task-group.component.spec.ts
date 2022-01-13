import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTaskGroupComponent } from './select-task-group.component';

describe('SelectTaskGroupComponent', () => {
  let component: SelectTaskGroupComponent;
  let fixture: ComponentFixture<SelectTaskGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTaskGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTaskGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

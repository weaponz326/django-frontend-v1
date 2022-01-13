import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTaskItemComponent } from './select-task-item.component';

describe('SelectTaskItemComponent', () => {
  let component: SelectTaskItemComponent;
  let fixture: ComponentFixture<SelectTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTaskItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

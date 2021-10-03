import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskGroupsComponent } from './all-task-groups.component';

describe('AllTaskGroupsComponent', () => {
  let component: AllTaskGroupsComponent;
  let fixture: ComponentFixture<AllTaskGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTaskGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTaskGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

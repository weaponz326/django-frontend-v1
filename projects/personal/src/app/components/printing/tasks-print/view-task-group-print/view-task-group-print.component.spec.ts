import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskGroupPrintComponent } from './view-task-group-print.component';

describe('ViewTaskGroupPrintComponent', () => {
  let component: ViewTaskGroupPrintComponent;
  let fixture: ComponentFixture<ViewTaskGroupPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskGroupPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskGroupPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskPrintComponent } from './view-task-print.component';

describe('ViewTaskPrintComponent', () => {
  let component: ViewTaskPrintComponent;
  let fixture: ComponentFixture<ViewTaskPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

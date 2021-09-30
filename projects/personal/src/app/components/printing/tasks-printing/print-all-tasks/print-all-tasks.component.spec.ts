import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllTasksComponent } from './print-all-tasks.component';

describe('PrintAllTasksComponent', () => {
  let component: PrintAllTasksComponent;
  let fixture: ComponentFixture<PrintAllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAllTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

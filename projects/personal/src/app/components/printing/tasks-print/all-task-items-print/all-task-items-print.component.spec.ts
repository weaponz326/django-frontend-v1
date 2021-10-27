import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskItemsPrintComponent } from './all-task-items-print.component';

describe('AllTaskItemsPrintComponent', () => {
  let component: AllTaskItemsPrintComponent;
  let fixture: ComponentFixture<AllTaskItemsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTaskItemsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTaskItemsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

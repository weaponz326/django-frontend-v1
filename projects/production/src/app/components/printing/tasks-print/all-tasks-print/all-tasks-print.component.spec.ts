import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTasksPrintComponent } from './all-tasks-print.component';

describe('AllTasksPrintComponent', () => {
  let component: AllTasksPrintComponent;
  let fixture: ComponentFixture<AllTasksPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTasksPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasksPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

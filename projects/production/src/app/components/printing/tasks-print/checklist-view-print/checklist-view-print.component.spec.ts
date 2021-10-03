import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistViewPrintComponent } from './checklist-view-print.component';

describe('ChecklistViewPrintComponent', () => {
  let component: ChecklistViewPrintComponent;
  let fixture: ComponentFixture<ChecklistViewPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistViewPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistViewPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

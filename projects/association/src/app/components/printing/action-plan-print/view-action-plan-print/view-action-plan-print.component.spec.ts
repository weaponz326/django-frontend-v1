import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActionPlanPrintComponent } from './view-action-plan-print.component';

describe('ViewActionPlanPrintComponent', () => {
  let component: ViewActionPlanPrintComponent;
  let fixture: ComponentFixture<ViewActionPlanPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActionPlanPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActionPlanPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

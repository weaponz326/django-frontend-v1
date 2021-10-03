import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActionPlanComponent } from './select-action-plan.component';

describe('SelectActionPlanComponent', () => {
  let component: SelectActionPlanComponent;
  let fixture: ComponentFixture<SelectActionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectActionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

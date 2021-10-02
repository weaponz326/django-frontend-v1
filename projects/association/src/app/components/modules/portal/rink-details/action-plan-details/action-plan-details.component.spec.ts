import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlanDetailsComponent } from './action-plan-details.component';

describe('ActionPlanDetailsComponent', () => {
  let component: ActionPlanDetailsComponent;
  let fixture: ComponentFixture<ActionPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

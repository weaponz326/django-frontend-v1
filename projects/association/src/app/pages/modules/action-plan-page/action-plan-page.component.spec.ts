import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlanPageComponent } from './action-plan-page.component';

describe('ActionPlanPageComponent', () => {
  let component: ActionPlanPageComponent;
  let fixture: ComponentFixture<ActionPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPlanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

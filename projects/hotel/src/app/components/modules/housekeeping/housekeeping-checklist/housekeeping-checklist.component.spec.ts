import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingChecklistComponent } from './housekeeping-checklist.component';

describe('HousekeepingChecklistComponent', () => {
  let component: HousekeepingChecklistComponent;
  let fixture: ComponentFixture<HousekeepingChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeepingChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRosterComponent } from './all-roster.component';

describe('AllRosterComponent', () => {
  let component: AllRosterComponent;
  let fixture: ComponentFixture<AllRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

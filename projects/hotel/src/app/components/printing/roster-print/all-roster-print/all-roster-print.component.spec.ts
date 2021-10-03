import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRosterPrintComponent } from './all-roster-print.component';

describe('AllRosterPrintComponent', () => {
  let component: AllRosterPrintComponent;
  let fixture: ComponentFixture<AllRosterPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRosterPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRosterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

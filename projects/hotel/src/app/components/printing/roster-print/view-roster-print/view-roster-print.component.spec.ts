import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRosterPrintComponent } from './view-roster-print.component';

describe('ViewRosterPrintComponent', () => {
  let component: ViewRosterPrintComponent;
  let fixture: ComponentFixture<ViewRosterPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRosterPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRosterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStaffPrintComponent } from './view-staff-print.component';

describe('ViewStaffPrintComponent', () => {
  let component: ViewStaffPrintComponent;
  let fixture: ComponentFixture<ViewStaffPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStaffPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

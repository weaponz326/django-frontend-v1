import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberPrintComponent } from './view-member-print.component';

describe('ViewMemberPrintComponent', () => {
  let component: ViewMemberPrintComponent;
  let fixture: ComponentFixture<ViewMemberPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMemberPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParentPrintComponent } from './view-parent-print.component';

describe('ViewParentPrintComponent', () => {
  let component: ViewParentPrintComponent;
  let fixture: ComponentFixture<ViewParentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

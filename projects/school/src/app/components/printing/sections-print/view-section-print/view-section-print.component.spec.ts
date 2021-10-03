import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSectionPrintComponent } from './view-section-print.component';

describe('ViewSectionPrintComponent', () => {
  let component: ViewSectionPrintComponent;
  let fixture: ComponentFixture<ViewSectionPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSectionPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSectionPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

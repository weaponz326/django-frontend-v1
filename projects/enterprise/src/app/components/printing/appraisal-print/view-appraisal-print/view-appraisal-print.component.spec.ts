import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppraisalPrintComponent } from './view-appraisal-print.component';

describe('ViewAppraisalPrintComponent', () => {
  let component: ViewAppraisalPrintComponent;
  let fixture: ComponentFixture<ViewAppraisalPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppraisalPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppraisalPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

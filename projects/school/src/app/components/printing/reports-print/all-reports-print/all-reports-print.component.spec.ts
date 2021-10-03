import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportsPrintComponent } from './all-reports-print.component';

describe('AllReportsPrintComponent', () => {
  let component: AllReportsPrintComponent;
  let fixture: ComponentFixture<AllReportsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReportsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

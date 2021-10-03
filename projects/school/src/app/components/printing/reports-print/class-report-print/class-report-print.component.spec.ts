import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReportPrintComponent } from './class-report-print.component';

describe('ClassReportPrintComponent', () => {
  let component: ClassReportPrintComponent;
  let fixture: ComponentFixture<ClassReportPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassReportPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassReportPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

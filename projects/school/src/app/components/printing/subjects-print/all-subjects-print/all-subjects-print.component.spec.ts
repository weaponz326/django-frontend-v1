import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubjectsPrintComponent } from './all-subjects-print.component';

describe('AllSubjectsPrintComponent', () => {
  let component: AllSubjectsPrintComponent;
  let fixture: ComponentFixture<AllSubjectsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSubjectsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubjectsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

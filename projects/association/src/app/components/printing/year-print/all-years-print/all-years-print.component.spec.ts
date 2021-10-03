import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYearsPrintComponent } from './all-years-print.component';

describe('AllYearsPrintComponent', () => {
  let component: AllYearsPrintComponent;
  let fixture: ComponentFixture<AllYearsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllYearsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllYearsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

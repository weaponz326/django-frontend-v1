import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSectionsPrintComponent } from './all-sections-print.component';

describe('AllSectionsPrintComponent', () => {
  let component: AllSectionsPrintComponent;
  let fixture: ComponentFixture<AllSectionsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSectionsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSectionsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

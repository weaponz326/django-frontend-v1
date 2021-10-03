import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsPrintComponent } from './all-projects-print.component';

describe('AllProjectsPrintComponent', () => {
  let component: AllProjectsPrintComponent;
  let fixture: ComponentFixture<AllProjectsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProjectsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

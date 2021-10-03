import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitorsPrintComponent } from './all-visitors-print.component';

describe('AllVisitorsPrintComponent', () => {
  let component: AllVisitorsPrintComponent;
  let fixture: ComponentFixture<AllVisitorsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVisitorsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisitorsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDuesPrintComponent } from './all-dues-print.component';

describe('AllDuesPrintComponent', () => {
  let component: AllDuesPrintComponent;
  let fixture: ComponentFixture<AllDuesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDuesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDuesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

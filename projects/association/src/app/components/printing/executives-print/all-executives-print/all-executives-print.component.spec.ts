import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExecutivesPrintComponent } from './all-executives-print.component';

describe('AllExecutivesPrintComponent', () => {
  let component: AllExecutivesPrintComponent;
  let fixture: ComponentFixture<AllExecutivesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExecutivesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExecutivesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServicesPrintComponent } from './all-services-print.component';

describe('AllServicesPrintComponent', () => {
  let component: AllServicesPrintComponent;
  let fixture: ComponentFixture<AllServicesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllServicesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServicesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

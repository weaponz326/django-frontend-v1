import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeesPrintComponent } from './all-fees-print.component';

describe('AllFeesPrintComponent', () => {
  let component: AllFeesPrintComponent;
  let fixture: ComponentFixture<AllFeesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFeesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

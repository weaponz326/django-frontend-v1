import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTablesPrintComponent } from './all-tables-print.component';

describe('AllTablesPrintComponent', () => {
  let component: AllTablesPrintComponent;
  let fixture: ComponentFixture<AllTablesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTablesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTablesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

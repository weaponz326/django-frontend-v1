import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDrugsPrintComponent } from './all-drugs-print.component';

describe('AllDrugsPrintComponent', () => {
  let component: AllDrugsPrintComponent;
  let fixture: ComponentFixture<AllDrugsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDrugsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDrugsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

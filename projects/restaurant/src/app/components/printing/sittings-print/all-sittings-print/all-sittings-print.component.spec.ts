import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSittingsPrintComponent } from './all-sittings-print.component';

describe('AllSittingsPrintComponent', () => {
  let component: AllSittingsPrintComponent;
  let fixture: ComponentFixture<AllSittingsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSittingsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSittingsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSentLettersPrintComponent } from './all-sent-letters-print.component';

describe('AllSentLettersPrintComponent', () => {
  let component: AllSentLettersPrintComponent;
  let fixture: ComponentFixture<AllSentLettersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSentLettersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSentLettersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

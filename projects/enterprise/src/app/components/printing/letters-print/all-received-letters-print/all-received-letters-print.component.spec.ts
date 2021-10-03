import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceivedLettersPrintComponent } from './all-received-letters-print.component';

describe('AllReceivedLettersPrintComponent', () => {
  let component: AllReceivedLettersPrintComponent;
  let fixture: ComponentFixture<AllReceivedLettersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReceivedLettersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReceivedLettersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

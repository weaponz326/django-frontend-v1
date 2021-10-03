import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSentLetterComponent } from './select-sent-letter.component';

describe('SelectSentLetterComponent', () => {
  let component: SelectSentLetterComponent;
  let fixture: ComponentFixture<SelectSentLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSentLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSentLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

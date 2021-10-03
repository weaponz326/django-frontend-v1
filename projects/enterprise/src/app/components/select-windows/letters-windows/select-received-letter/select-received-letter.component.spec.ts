import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReceivedLetterComponent } from './select-received-letter.component';

describe('SelectReceivedLetterComponent', () => {
  let component: SelectReceivedLetterComponent;
  let fixture: ComponentFixture<SelectReceivedLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReceivedLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReceivedLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

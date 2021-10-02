import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDetailsComponent } from './letter-details.component';

describe('LetterDetailsComponent', () => {
  let component: LetterDetailsComponent;
  let fixture: ComponentFixture<LetterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

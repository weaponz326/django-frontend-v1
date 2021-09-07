import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersPageComponent } from './letters-page.component';

describe('LettersPageComponent', () => {
  let component: LettersPageComponent;
  let fixture: ComponentFixture<LettersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

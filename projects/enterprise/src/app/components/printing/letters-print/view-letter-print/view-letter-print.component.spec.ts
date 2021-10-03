import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLetterPrintComponent } from './view-letter-print.component';

describe('ViewLetterPrintComponent', () => {
  let component: ViewLetterPrintComponent;
  let fixture: ComponentFixture<ViewLetterPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLetterPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLetterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

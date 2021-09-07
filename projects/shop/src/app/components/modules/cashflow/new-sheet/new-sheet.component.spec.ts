import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSheetComponent } from './new-sheet.component';

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let fixture: ComponentFixture<NewSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

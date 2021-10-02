import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotePrintComponent } from './view-note-print.component';

describe('ViewNotePrintComponent', () => {
  let component: ViewNotePrintComponent;
  let fixture: ComponentFixture<ViewNotePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNotePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

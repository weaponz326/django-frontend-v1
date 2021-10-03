import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWardPrintComponent } from './view-ward-print.component';

describe('ViewWardPrintComponent', () => {
  let component: ViewWardPrintComponent;
  let fixture: ComponentFixture<ViewWardPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWardPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWardPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

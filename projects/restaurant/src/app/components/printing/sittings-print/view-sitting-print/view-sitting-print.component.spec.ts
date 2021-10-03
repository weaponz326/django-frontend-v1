import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSittingPrintComponent } from './view-sitting-print.component';

describe('ViewSittingPrintComponent', () => {
  let component: ViewSittingPrintComponent;
  let fixture: ComponentFixture<ViewSittingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSittingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSittingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

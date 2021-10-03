import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabPrintComponent } from './view-lab-print.component';

describe('ViewLabPrintComponent', () => {
  let component: ViewLabPrintComponent;
  let fixture: ComponentFixture<ViewLabPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLabPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

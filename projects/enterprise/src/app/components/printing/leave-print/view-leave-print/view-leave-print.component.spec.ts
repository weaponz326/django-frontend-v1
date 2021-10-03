import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeavePrintComponent } from './view-leave-print.component';

describe('ViewLeavePrintComponent', () => {
  let component: ViewLeavePrintComponent;
  let fixture: ComponentFixture<ViewLeavePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeavePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeavePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

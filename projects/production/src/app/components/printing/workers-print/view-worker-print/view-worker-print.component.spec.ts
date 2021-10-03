import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkerPrintComponent } from './view-worker-print.component';

describe('ViewWorkerPrintComponent', () => {
  let component: ViewWorkerPrintComponent;
  let fixture: ComponentFixture<ViewWorkerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkerPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

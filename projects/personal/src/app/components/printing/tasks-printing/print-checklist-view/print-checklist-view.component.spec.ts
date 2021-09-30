import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintChecklistViewComponent } from './print-checklist-view.component';

describe('PrintChecklistViewComponent', () => {
  let component: PrintChecklistViewComponent;
  let fixture: ComponentFixture<PrintChecklistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintChecklistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintChecklistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

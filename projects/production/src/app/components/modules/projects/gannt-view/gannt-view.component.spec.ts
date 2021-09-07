import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanntViewComponent } from './gannt-view.component';

describe('GanntViewComponent', () => {
  let component: GanntViewComponent;
  let fixture: ComponentFixture<GanntViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanntViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanntViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectPrintComponent } from './view-project-print.component';

describe('ViewProjectPrintComponent', () => {
  let component: ViewProjectPrintComponent;
  let fixture: ComponentFixture<ViewProjectPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNursePrintComponent } from './view-nurse-print.component';

describe('ViewNursePrintComponent', () => {
  let component: ViewNursePrintComponent;
  let fixture: ComponentFixture<ViewNursePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNursePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNursePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

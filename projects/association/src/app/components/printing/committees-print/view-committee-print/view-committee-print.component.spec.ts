import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommitteePrintComponent } from './view-committee-print.component';

describe('ViewCommitteePrintComponent', () => {
  let component: ViewCommitteePrintComponent;
  let fixture: ComponentFixture<ViewCommitteePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommitteePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommitteePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

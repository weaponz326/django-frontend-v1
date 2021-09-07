import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteLeftComponent } from './suite-left.component';

describe('SuiteLeftComponent', () => {
  let component: SuiteLeftComponent;
  let fixture: ComponentFixture<SuiteLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

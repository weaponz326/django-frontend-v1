import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteRightComponent } from './suite-right.component';

describe('SuiteRightComponent', () => {
  let component: SuiteRightComponent;
  let fixture: ComponentFixture<SuiteRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAppraisalComponent } from './select-appraisal.component';

describe('SelectAppraisalComponent', () => {
  let component: SelectAppraisalComponent;
  let fixture: ComponentFixture<SelectAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAppraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

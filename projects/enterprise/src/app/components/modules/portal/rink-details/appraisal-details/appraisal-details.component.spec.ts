import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalDetailsComponent } from './appraisal-details.component';

describe('AppraisalDetailsComponent', () => {
  let component: AppraisalDetailsComponent;
  let fixture: ComponentFixture<AppraisalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

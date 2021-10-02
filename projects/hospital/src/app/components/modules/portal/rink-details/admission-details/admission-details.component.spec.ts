import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionDetailsComponent } from './admission-details.component';

describe('AdmissionDetailsComponent', () => {
  let component: AdmissionDetailsComponent;
  let fixture: ComponentFixture<AdmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

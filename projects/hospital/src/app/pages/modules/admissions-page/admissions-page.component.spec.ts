import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsPageComponent } from './admissions-page.component';

describe('AdmissionsPageComponent', () => {
  let component: AdmissionsPageComponent;
  let fixture: ComponentFixture<AdmissionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

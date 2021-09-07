import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsPageComponent } from './prescriptions-page.component';

describe('PrescriptionsPageComponent', () => {
  let component: PrescriptionsPageComponent;
  let fixture: ComponentFixture<PrescriptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

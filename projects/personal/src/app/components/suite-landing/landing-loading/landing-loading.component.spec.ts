import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLoadingComponent } from './landing-loading.component';

describe('LandingLoadingComponent', () => {
  let component: LandingLoadingComponent;
  let fixture: ComponentFixture<LandingLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

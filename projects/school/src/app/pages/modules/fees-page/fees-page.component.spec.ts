import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPageComponent } from './fees-page.component';

describe('FeesPageComponent', () => {
  let component: FeesPageComponent;
  let fixture: ComponentFixture<FeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

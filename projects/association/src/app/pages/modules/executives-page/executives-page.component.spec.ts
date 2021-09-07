import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivesPageComponent } from './executives-page.component';

describe('ExecutivesPageComponent', () => {
  let component: ExecutivesPageComponent;
  let fixture: ComponentFixture<ExecutivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutivesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsPageComponent } from './guests-page.component';

describe('GuestsPageComponent', () => {
  let component: GuestsPageComponent;
  let fixture: ComponentFixture<GuestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

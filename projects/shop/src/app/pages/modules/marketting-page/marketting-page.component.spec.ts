import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkettingPageComponent } from './marketting-page.component';

describe('MarkettingPageComponent', () => {
  let component: MarkettingPageComponent;
  let fixture: ComponentFixture<MarkettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkettingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsPageComponent } from './drugs-page.component';

describe('DrugsPageComponent', () => {
  let component: DrugsPageComponent;
  let fixture: ComponentFixture<DrugsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

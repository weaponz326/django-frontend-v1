import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesPageComponent } from './dues-page.component';

describe('DuesPageComponent', () => {
  let component: DuesPageComponent;
  let fixture: ComponentFixture<DuesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

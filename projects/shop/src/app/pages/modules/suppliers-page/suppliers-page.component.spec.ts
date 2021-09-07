import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersPageComponent } from './suppliers-page.component';

describe('SuppliersPageComponent', () => {
  let component: SuppliersPageComponent;
  let fixture: ComponentFixture<SuppliersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

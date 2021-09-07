import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardsPageComponent } from './wards-page.component';

describe('WardsPageComponent', () => {
  let component: WardsPageComponent;
  let fixture: ComponentFixture<WardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

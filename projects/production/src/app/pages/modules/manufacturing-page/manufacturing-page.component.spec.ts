import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingPageComponent } from './manufacturing-page.component';

describe('ManufacturingPageComponent', () => {
  let component: ManufacturingPageComponent;
  let fixture: ComponentFixture<ManufacturingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

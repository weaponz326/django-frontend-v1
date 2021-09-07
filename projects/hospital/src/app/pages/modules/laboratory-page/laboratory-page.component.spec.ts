import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryPageComponent } from './laboratory-page.component';

describe('LaboratoryPageComponent', () => {
  let component: LaboratoryPageComponent;
  let fixture: ComponentFixture<LaboratoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

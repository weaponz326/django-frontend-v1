import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryPageComponent } from './dispensary-page.component';

describe('DispensaryPageComponent', () => {
  let component: DispensaryPageComponent;
  let fixture: ComponentFixture<DispensaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

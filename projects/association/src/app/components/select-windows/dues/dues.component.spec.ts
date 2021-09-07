import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesComponent } from './dues.component';

describe('DuesComponent', () => {
  let component: DuesComponent;
  let fixture: ComponentFixture<DuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardFormComponent } from './ward-form.component';

describe('WardFormComponent', () => {
  let component: WardFormComponent;
  let fixture: ComponentFixture<WardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

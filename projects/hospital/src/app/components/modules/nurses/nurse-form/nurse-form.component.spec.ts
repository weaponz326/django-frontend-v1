import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseFormComponent } from './nurse-form.component';

describe('NurseFormComponent', () => {
  let component: NurseFormComponent;
  let fixture: ComponentFixture<NurseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

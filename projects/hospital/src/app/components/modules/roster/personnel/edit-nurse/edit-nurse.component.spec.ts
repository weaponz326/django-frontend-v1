import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNurseComponent } from './edit-nurse.component';

describe('EditNurseComponent', () => {
  let component: EditNurseComponent;
  let fixture: ComponentFixture<EditNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

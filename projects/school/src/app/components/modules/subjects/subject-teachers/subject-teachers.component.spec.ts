import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTeachersComponent } from './subject-teachers.component';

describe('SubjectTeachersComponent', () => {
  let component: SubjectTeachersComponent;
  let fixture: ComponentFixture<SubjectTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectsComponent } from './class-subjects.component';

describe('ClassSubjectsComponent', () => {
  let component: ClassSubjectsComponent;
  let fixture: ComponentFixture<ClassSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

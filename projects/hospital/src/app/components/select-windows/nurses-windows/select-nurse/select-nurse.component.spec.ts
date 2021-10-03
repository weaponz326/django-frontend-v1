import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNurseComponent } from './select-nurse.component';

describe('SelectNurseComponent', () => {
  let component: SelectNurseComponent;
  let fixture: ComponentFixture<SelectNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

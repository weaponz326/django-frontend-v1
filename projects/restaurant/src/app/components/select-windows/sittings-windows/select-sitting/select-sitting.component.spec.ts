import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSittingComponent } from './select-sitting.component';

describe('SelectSittingComponent', () => {
  let component: SelectSittingComponent;
  let fixture: ComponentFixture<SelectSittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

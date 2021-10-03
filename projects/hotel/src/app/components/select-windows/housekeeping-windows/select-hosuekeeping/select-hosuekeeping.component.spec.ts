import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHosuekeepingComponent } from './select-hosuekeeping.component';

describe('SelectHosuekeepingComponent', () => {
  let component: SelectHosuekeepingComponent;
  let fixture: ComponentFixture<SelectHosuekeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHosuekeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHosuekeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

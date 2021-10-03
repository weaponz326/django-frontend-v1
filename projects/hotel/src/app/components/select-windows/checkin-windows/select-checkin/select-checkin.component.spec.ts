import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCheckinComponent } from './select-checkin.component';

describe('SelectCheckinComponent', () => {
  let component: SelectCheckinComponent;
  let fixture: ComponentFixture<SelectCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

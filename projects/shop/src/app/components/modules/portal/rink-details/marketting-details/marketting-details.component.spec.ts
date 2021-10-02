import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkettingDetailsComponent } from './marketting-details.component';

describe('MarkettingDetailsComponent', () => {
  let component: MarkettingDetailsComponent;
  let fixture: ComponentFixture<MarkettingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkettingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkettingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

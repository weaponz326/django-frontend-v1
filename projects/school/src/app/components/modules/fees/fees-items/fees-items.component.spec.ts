import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesItemsComponent } from './fees-items.component';

describe('FeesItemsComponent', () => {
  let component: FeesItemsComponent;
  let fixture: ComponentFixture<FeesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

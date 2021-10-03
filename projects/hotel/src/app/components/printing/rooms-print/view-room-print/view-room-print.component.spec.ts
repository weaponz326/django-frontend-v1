import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomPrintComponent } from './view-room-print.component';

describe('ViewRoomPrintComponent', () => {
  let component: ViewRoomPrintComponent;
  let fixture: ComponentFixture<ViewRoomPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRoomPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoomPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

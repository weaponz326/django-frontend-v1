import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomsPrintComponent } from './all-rooms-print.component';

describe('AllRoomsPrintComponent', () => {
  let component: AllRoomsPrintComponent;
  let fixture: ComponentFixture<AllRoomsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRoomsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRoomsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesPageComponent } from './receivables-page.component';

describe('ReceivablesPageComponent', () => {
  let component: ReceivablesPageComponent;
  let fixture: ComponentFixture<ReceivablesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivablesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

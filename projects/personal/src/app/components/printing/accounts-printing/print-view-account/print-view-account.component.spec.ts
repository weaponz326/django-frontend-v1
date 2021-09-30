import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintViewAccountComponent } from './print-view-account.component';

describe('PrintViewAccountComponent', () => {
  let component: PrintViewAccountComponent;
  let fixture: ComponentFixture<PrintViewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintViewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintViewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

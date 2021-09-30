import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllAccountsComponent } from './print-all-accounts.component';

describe('PrintAllAccountsComponent', () => {
  let component: PrintAllAccountsComponent;
  let fixture: ComponentFixture<PrintAllAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAllAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAllAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

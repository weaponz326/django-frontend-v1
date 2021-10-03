import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLedgerComponent } from './select-ledger.component';

describe('SelectLedgerComponent', () => {
  let component: SelectLedgerComponent;
  let fixture: ComponentFixture<SelectLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLedgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

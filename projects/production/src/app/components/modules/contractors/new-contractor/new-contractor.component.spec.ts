import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContractorComponent } from './new-contractor.component';

describe('NewContractorComponent', () => {
  let component: NewContractorComponent;
  let fixture: ComponentFixture<NewContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

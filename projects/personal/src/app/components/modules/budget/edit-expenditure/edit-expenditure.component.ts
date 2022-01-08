import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-expenditure',
  templateUrl: './edit-expenditure.component.html',
  styleUrls: ['./edit-expenditure.component.scss']
})
export class EditExpenditureComponent implements OnInit {

  constructor() { }

  @Output() saveExpenditureEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  editExpenditureForm: FormGroup = new FormGroup({});

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
    this.initeditExpenditureForm();
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.editExpenditureForm.controls.itemNumber.setValue(data.item_number);
    this.editExpenditureForm.controls.itemDescription.setValue(data.item_description);
    this.editExpenditureForm.controls.amount.setValue(data.amount);

    this.buttonElement.nativeElement.click();
  }

  initeditExpenditureForm(){
    this.editExpenditureForm = new FormGroup({
      itemNumber: new FormControl(),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveExpenditure(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      budget: sessionStorage.getItem('personal_budget_id'),
      item_number: this.editExpenditureForm.controls.itemNumber.value,
      item_description: this.editExpenditureForm.controls.itemDescription.value,
      amount: this.editExpenditureForm.controls.amount.value
    }

    this.saveExpenditureEvent.emit(data);
  }

}

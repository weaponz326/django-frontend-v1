import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.scss']
})
export class EditIncomeComponent implements OnInit {

  constructor() { }

  @Output() saveIncomeEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  editIncomeForm: FormGroup = new FormGroup({});

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
    this.initeditIncomeForm();
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.editIncomeForm.controls.itemNumber.setValue(data.item_number);
    this.editIncomeForm.controls.itemDescription.setValue(data.item_description);
    this.editIncomeForm.controls.amount.setValue(data.amount);

    this.buttonElement.nativeElement.click();
  }

  initeditIncomeForm(){
    this.editIncomeForm = new FormGroup({
      itemNumber: new FormControl(),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveIncome(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      budget: sessionStorage.getItem('personal_budget_id'),
      item_number: this.editIncomeForm.controls.itemNumber.value,
      item_description: this.editIncomeForm.controls.itemDescription.value,
      amount: this.editIncomeForm.controls.amount.value
    }

    this.saveIncomeEvent.emit(data);
  }

}

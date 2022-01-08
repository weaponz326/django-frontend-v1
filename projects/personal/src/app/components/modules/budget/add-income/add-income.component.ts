import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  constructor() { }

  @Output() saveIncomeEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  addIncomeForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initAddIncomeForm();
  }

  openModal(){
    this.addIncomeForm.controls.amount.setValue(0);

    this.buttonElement.nativeElement.click();
  }

  initAddIncomeForm(){
    this.addIncomeForm = new FormGroup({
      itemNumber: new FormControl(''),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveIncome(){
    let data = {
      budget: sessionStorage.getItem('personal_budget_id'),
      item_number: this.addIncomeForm.controls.itemNumber.value,
      item_description: this.addIncomeForm.controls.itemDescription.value,
      amount: this.addIncomeForm.controls.amount.value
    }

    this.saveIncomeEvent.emit(data);
  }

  resetForm(){
    this.addIncomeForm.controls.itemNumber.setValue('');
    this.addIncomeForm.controls.itemDescription.setValue('');
    this.addIncomeForm.controls.amount.setValue('');
  }

}

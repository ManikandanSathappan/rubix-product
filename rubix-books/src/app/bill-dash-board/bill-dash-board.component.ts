import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ApiService } from '../shared/BillApi.service';
import { BillModal } from './bill-dashBoard.modal';
@Component({
  selector: 'app-bill-dash-board',
  templateUrl: './bill-dash-board.component.html',
  styleUrls: ['./bill-dash-board.component.css']
})
export class BillDashBoardComponent implements OnInit {

  formValue !: FormGroup;
  billModalObj : BillModal = new BillModal();
  constructor(private formbuilder: FormBuilder, private api: ApiService){

  }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      // supplierId : [''],
      bill : [''],
      // billDate : [''],
      amount : [''],
      date : [''],
      // creditDays : ['']
    })
  }
  postBillDetails(){
    // this.billModalObj.supplierId = this.formValue.value.supplier;
    this.billModalObj.amount = this.formValue.value.amount;
    // this.billModalObj.billDate = this.formValue.value.billDate;
    // this.billModalObj.billNo = this.formValue.value.billNo;
    this.billModalObj.bill = this.formValue.value.bill;
    this.billModalObj.date = this.formValue.value.date;

    this.api.postBill(this.billModalObj)
    .subscribe(res=>{
      console.log(res);
      alert("bill added successfully")
    },
    err=>{
      alert("somethind went wrong")
    }
    )
  } 
}

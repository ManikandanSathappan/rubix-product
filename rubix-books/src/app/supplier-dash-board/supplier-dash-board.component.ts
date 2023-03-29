import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { BillModal } from '../bill-dash-board/bill-dashBoard.modal';
import { ApiService } from '../shared/BillApi.service';
import { SupplierApiService } from '../shared/supplier-api.service';
import { SupplierModal } from './supplier.model';

@Component({
  selector: 'app-supplier-dash-board',
  templateUrl: './supplier-dash-board.component.html',
  styleUrls: ['./supplier-dash-board.component.css']
})
export class SupplierDashBoardComponent {
  formValue !: FormGroup;
  supplierModalObj: SupplierModal = new SupplierModal();
  suppliers: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private supplierService: SupplierApiService) {

  }
  ngOnInit(): void {
    this.suppliers = this.supplierService.GetSupplier().subscribe(data => this.suppliers = data);
    this.formValue = this.formbuilder.group({
      name: [""],
      address1: [""],
      address2: [""],
      city: [""],
      district: [""],
      state: [""],
      country: [""],
      taxIdentifier: [""],
      zipcode: [""],
      email: [""],
      phone: [""],
    })
  }
  postSupplierDetails() {
    this.supplierModalObj.name = this.formValue.value.name;
    this.supplierModalObj.address1 = this.formValue.value.address1;
    this.supplierModalObj.address2 = this.formValue.value.address2;
    this.supplierModalObj.city = this.formValue.value.city;
    this.supplierModalObj.district = this.formValue.value.district;
    this.supplierModalObj.state = this.formValue.value.state;
    this.supplierModalObj.country = this.formValue.value.country;
    this.supplierModalObj.taxIdentifier = this.formValue.value.taxIdentifier;
    this.supplierModalObj.zipcode = this.formValue.value.zipcode;
    this.supplierModalObj.email = this.formValue.value.email;
    this.supplierModalObj.phone = this.formValue.value.phone;

    this.supplierService.postSupplier(this.supplierModalObj)
      .subscribe(res => {
        console.log(res);
        alert("supplier added successfully")
      },
        err => {
          alert("somethind went wrong")
        }
      )
  }
}

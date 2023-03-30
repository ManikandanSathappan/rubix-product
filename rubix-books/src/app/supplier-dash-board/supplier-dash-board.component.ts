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
  showAdd!: boolean;
  showUpdate!: boolean;
  formValue !: FormGroup;
  supplierModalObj: SupplierModal = new SupplierModal();
  suppliers: any;
  constructor(private formbuilder: FormBuilder, private supplierService: SupplierApiService) {

  }
  ngOnInit(): void {
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
    this.getSupplierDetails();
  }

  clickAddSupplier() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
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
        alert("supplier added successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getSupplierDetails();
      },
        err => {
          alert("somethind went wrong")
        }
      )
  }
  getSupplierDetails() {
    this.suppliers = this.supplierService.GetSupplier().subscribe(data => this.suppliers = data);
  }

  deleteSupplier(supplier: any) {
    this.supplierService.deleteSupplier(supplier.id)
      .subscribe(res => {
        alert("Supplier Deleted");
        this.getSupplierDetails();
      })
  }
  onEdit(supplier: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.supplierModalObj.id = supplier.id;
    this.formValue.controls['name'].setValue(supplier.name);
    this.formValue.controls['address1'].setValue(supplier.address1);
    this.formValue.controls['address2'].setValue(supplier.address2);
    this.formValue.controls['city'].setValue(supplier.city);
    this.formValue.controls['district'].setValue(supplier.district);
    this.formValue.controls['state'].setValue(supplier.state);
    this.formValue.controls['country'].setValue(supplier.country);
    this.formValue.controls['taxIdentifier'].setValue(supplier.taxIdentifier);
    this.formValue.controls['zipcode'].setValue(supplier.zipcode);
    this.formValue.controls['email'].setValue(supplier.email);
    this.formValue.controls['phone'].setValue(supplier.phone);
  }
  updateSupplierDetails() {
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

    this.supplierService.updateSupplier(this.supplierModalObj, this.supplierModalObj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getSupplierDetails();
      })
  }
}

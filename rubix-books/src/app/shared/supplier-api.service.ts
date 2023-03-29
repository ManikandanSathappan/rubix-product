import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierApiService {

  constructor(private http:HttpClient) { }

  GetSupplier(){
    return this.http.get("http://localhost:8080/supplier/viewAll")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postSupplier(data : any){
    return this.http.post<any>("http://localhost:8080/supplier/create", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateSupplier(data : any){
    return this.http.post<any>("http://localhost:8080/supplier/update/1", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteSupplier(data : any){
    return this.http.post<any>("http://localhost:8080/supplier/delete/1", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

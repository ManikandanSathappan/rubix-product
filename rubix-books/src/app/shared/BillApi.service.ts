import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  GetBills(data : any){
    return this.http.get<any>("http://localhost:8080/bill/getAllBills", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postBill(data : any){
    return this.http.post<any>("http://localhost:8080/bill/creteBill", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateBill(data : any){
    return this.http.post<any>("http://localhost:8080/bill/updateBill/1", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteBill(data : any){
    return this.http.post<any>("http://localhost:8080/bill/delete/1", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}

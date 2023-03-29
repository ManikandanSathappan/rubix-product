import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 

  }

  getBills(){
    return this.http.get('http://localhost:8080/bill/getAllBills');
  }
}

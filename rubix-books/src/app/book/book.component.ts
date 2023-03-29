import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bills:any;
constructor(private service: BookService){

}

  ngOnInit() {
    this.bills=this.service.getBills().subscribe(data=>this.bills=data);
  }
}
 
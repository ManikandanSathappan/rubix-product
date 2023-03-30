import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BillDashBoardComponent } from './bill-dash-board/bill-dash-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierDashBoardComponent } from './supplier-dash-board/supplier-dash-board.component';
import { SideNavBarComponent } from './main/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BillDashBoardComponent,
    SupplierDashBoardComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

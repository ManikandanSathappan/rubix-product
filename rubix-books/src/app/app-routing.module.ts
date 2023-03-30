import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDashBoardComponent } from './supplier-dash-board/supplier-dash-board.component';

const routes: Routes = [
  { path: 'supplier', component: SupplierDashBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

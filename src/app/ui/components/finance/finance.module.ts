import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { DxTreeListModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    FinanceComponent,
    AccountTransactionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: FinanceComponent }    
      
    ]),
    DxTreeListModule
  ]
})
export class FinanceModule { }

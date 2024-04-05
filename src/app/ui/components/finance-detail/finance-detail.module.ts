import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceDetailComponent } from './finance-detail.component';
import { RouterModule } from '@angular/router';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxFormModule, DxSelectBoxModule, DxTabPanelModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    FinanceDetailComponent,
    AccountTransactionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: FinanceDetailComponent }  ,   
      
    ]),
    BrowserModule,      
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
    DxTabPanelModule,
  ]
})
export class FinanceDetailModule { }

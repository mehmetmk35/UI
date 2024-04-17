import { Component } from '@angular/core';
import { AccountTransactionsService, Employee } from './account-transactions-service.service';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent {
  employees: Employee[];

  constructor(service: AccountTransactionsService) {
    this.employees = service.getEmployees();
  }
  test(event:any){
    console.log("asdasdsa",event);
    
  }
}

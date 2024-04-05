import { AfterViewInit, Component, OnInit, enableProdMode } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { FinanceService } from 'src/app/services/model/finance.service';
import { timer } from 'rxjs';
 


if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-finance-detail',
  templateUrl: './finance-detail.component.html',
  styleUrls: ['./finance-detail.component.scss']
})
export class FinanceDetailComponent implements AfterViewInit  {
  url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

  suppliersData: DataSource;
  pageSize: number = 10; // Sayfa boyutu
  currentPageIndex: number = 0; // Sayfa indeksi
  constructor(private financeService:FinanceService) {
    this.suppliersData = new DataSource({
      store: []      
    });
 
  }
  ngAfterViewInit(): void {
    timer(0, 1000) // İlk değer 0 ms gecikme, sonraki değerler her 1000 ms (1 saniye)
     
    .subscribe(() => {
        this.test();
    });
    
  }
  async ngOnInit(){
    const data=await this.financeService.getInvoice(0,56689,(data)=>{this.suppliersData=data.invoices},(message:string)=>{console.log(message,"hataaa")}).then();
    
  }
  
  
  test(){
      console.log(this.pageSize,"pageSize");
      console.log(this.currentPageIndex,"currentPageIndex");
      
      
    }
}


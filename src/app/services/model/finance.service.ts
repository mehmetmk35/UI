import { Injectable } from '@angular/core';
import { HttpClientServiceService } from '../common/http-client-service.service';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Invoice } from 'src/app/contracts/List_Invoice';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private httpClinet:HttpClientServiceService) { }

  async getInvoice(page:number=0,size:number=5,succesCallBac?:(data:any)=>void,errorCallBack?:(errorMessage:string)=>void) : Promise<{ invoiceCount: number; invoice: List_Invoice[]}> 
  {
   const observable: Observable<{ invoiceCount: number; invoice: List_Invoice[] }>  =this.httpClinet.get({
      controller:'Invoice',
      queryString:`page=${page}&size=${size}`
   });

    
   const promisData=firstValueFrom(observable);
   promisData.then(data=>succesCallBac(data))
   .catch(error=>errorCallBack(error));
    return await promisData;

  }
}

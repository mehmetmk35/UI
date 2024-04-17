import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client-service';
import { Observable, firstValueFrom } from 'rxjs';
import { ListCompany } from 'src/app/contracts/ListCompany';
import { ListBranch } from 'src/app/contracts/ListBranch';
 

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private httpClinet:HttpClientService) { }

  async getCompany(succesCallBac?:()=>void,errorCallBack?:(errorMessage:string)=>void)
  {

    const observable:Observable<ListCompany>=this.httpClinet.get({
      controller:"Auth",
      action:"GetCompany"     
    });
    const promisData=firstValueFrom(observable);
  
    promisData.then(data=>succesCallBac())
    .catch(error=>errorCallBack(error));
    return await promisData;
  }


  async getBrach( company:string,succesCallBac?:()=>void,errorCallBack?:(errorMessage:string)=>void)
  {

    const observable:Observable<ListBranch>=this.httpClinet.get({
      controller:"Auth",
      action:"getbranch" ,
      queryString:`company=${company}`
        
    });
    const promisData=firstValueFrom(observable);
  
    promisData.then(data=>succesCallBac())
    .catch(error=>errorCallBack(error));
    return await promisData;
  }
}

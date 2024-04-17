import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Branch, ListBranch } from 'src/app/contracts/ListBranch';
import { ListCompany } from 'src/app/contracts/ListCompany';
import { CompanyService } from 'src/app/services/model/company.service';
 
import { UserAuthService } from 'src/app/services/model/user-auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/toastr.services/custom-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  selectedCompany: string = '';
  defaultBranchCode:any
  listCompany:ListCompany[];
  listBranch:Branch[];
 
  constructor(private userAuthService: UserAuthService, spinner: NgxSpinnerService,   private activatedRoute: ActivatedRoute, private router: Router,private companyService:CompanyService,private customToastrService:CustomToastrService) {
    super(spinner)
    
  }
  errorMesaj(error:string){
    this.customToastrService.message(error,"Hata",{messageType:ToastrMessageType.Error,position:ToastrPosition.TopRight})
  }
  async ngOnInit()  {
    this.showSpinner(SpinnerType.BallScaleMultiple)
    this.listCompany=(await this.companyService.getCompany(()=>{},(error)=>{this.errorMesaj(error)})).companyName;   
    this.hideSpinner(SpinnerType.BallScaleMultiple)
    console.log(this.listCompany,"this.listCompany=");
    
  }

  async selectRequestBrach(company:any){   
    this.showSpinner(SpinnerType.BallScaleMultiple) 
    const data = await this.companyService.getBrach(company,()=>{},(error)=>{this.errorMesaj(error)}) 
    this.listBranch=data.branch;  
    this.defaultBranchCode='0'
    console.log(this.listBranch,"this.listBranch");
      
    this.hideSpinner(SpinnerType.BallScaleMultiple)
  }


  async login(usernameOrEmail: string, password: string,company:string,branch:string) {
    console.log(company +branch,"sss");
    
    this.showSpinner(SpinnerType.BallAtom);
    await this.userAuthService.login(usernameOrEmail, password, () => { 

      this.activatedRoute.queryParams.subscribe(params => {
        
        const returnUrl: string = params["returnUrl"];
        if (returnUrl)
          this.router.navigate([returnUrl]);
      });
      this.hideSpinner(SpinnerType.BallAtom);
    },(error)=>{this.errorMesaj(error)});
  }
}

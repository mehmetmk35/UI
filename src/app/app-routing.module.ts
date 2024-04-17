import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
 
import { HomeComponent } from './ui/components/home/home.component';
import { authGuardFn } from './guard/common/auth.guard';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "login",loadChildren:()=>import("./ui/components/login/login.module").then(module=>module.LoginModule)},
  { path: "finance", loadChildren:()=>import("./ui/components/finance/finance.module").then(module=>module.FinanceModule),canActivate:[authGuardFn]},
  { path: "financeDetail", loadChildren:()=>import("./ui/components/finance-detail/finance-detail.module").then(module=>module.FinanceDetailModule),canActivate:[authGuardFn]},
  { path: "financeDetail/:pageNo", loadChildren:()=>import("./ui/components/finance-detail/finance-detail.module").then(module=>module.FinanceDetailModule),canActivate:[authGuardFn]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

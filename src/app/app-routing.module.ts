import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
 
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "finance", loadChildren:()=>import("./ui/components/finance/finance.module").then(module=>module.FinanceModule)},
  { path: "financeDetail", loadChildren:()=>import("./ui/components/finance-detail/finance-detail.module").then(module=>module.FinanceDetailModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

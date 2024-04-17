import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceModule } from './finance/finance.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinanceModule,
    HomeModule,
    LoginModule
  ]
})
export class ComponentsModule { }

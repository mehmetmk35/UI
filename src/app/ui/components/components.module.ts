import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceModule } from './finance/finance.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinanceModule,
    HomeModule
  ]
})
export class ComponentsModule { }

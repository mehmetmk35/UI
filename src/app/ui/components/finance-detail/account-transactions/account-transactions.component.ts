import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { DxFormTypes } from 'devextreme-angular/ui/form';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements AfterViewInit {
  @Input() key: number;

  @Input() rowData: object;

  url: string;

  productIdBySupplier: number;

  productsData: DataSource;

  orderHistoryData: DataSource;

  constructor() {
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';
  }

  ngAfterViewInit() {
    this.productsData = new DataSource({
      store: AspNetData.createStore({
        key: 'ProductID',
        loadParams: { SupplierID: this.key },
        loadUrl: `${this.url}/GetProductsBySupplier`,
        onLoaded: (items) => this.setDefaultProduct(items),
      }),
    });
  }

  setDefaultProduct(items) {
    const firstItem = items[0];

    if (firstItem && this.productIdBySupplier === undefined) {
      this.productIdBySupplier = firstItem.ProductID;
    }
  }

  handleValueChange(e: DxSelectBoxTypes.ValueChangedEvent) {
    this.productIdBySupplier = e.value;
    this.orderHistoryData = new DataSource({
      store: AspNetData.createStore({
        key: 'OrderID',
        loadParams: { ProductID: e.value },
        loadUrl: `${this.url}/GetOrdersByProduct`,
      }),
    });
  }

  // customizeItemTemplate(item: DxFormTypes.SimpleItem) {
  //   item.template = 'formItem';
  // }

}

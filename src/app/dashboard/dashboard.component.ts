import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService, ValueCount } from '../core/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  categoriesSubscription: Subscription;
  vendorsSubscription: Subscription;
  priceCategorySubscription: Subscription;
  priceVendorSubscription: Subscription;

  dataCategories: ValueCount[] = [];
  dataVendors: ValueCount[] = [];
  dataPriceCategory: ValueCount[] = [];
  dataPriceVendor: ValueCount[] = [];

  colorScheme = {
    domain: [
      '#647c8a',
      '#3f51b5',
      '#2196f3',
      '#00b862',
      '#afdf0a',
      '#a7b61a',
      '#f3e562',
      '#ff9800',
      '#ff5722',
      '#ff4514',
    ],
  };

  constructor(private productsService: ProductService) {
    this.categoriesSubscription = this.productsService
      .getCounts('category', false)
      .subscribe((counts: ValueCount[]) => {
        this.dataCategories = counts;
      });
    this.vendorsSubscription = this.productsService
      .getCounts('vendor', true)
      .subscribe((values: ValueCount[]) => {
        this.dataVendors = values;
      });
    this.priceCategorySubscription = this.productsService
      .getSum('unitPrice', 'category', true)
      .subscribe((values: ValueCount[]) => {
        this.dataPriceCategory = values.slice(0, 6);
      });
    this.priceVendorSubscription = this.productsService
      .getSum('unitPrice', 'vendor', true)
      .subscribe((values: ValueCount[]) => {
        this.dataPriceVendor = values;
      });
  }
  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
    this.vendorsSubscription.unsubscribe();
    this.priceCategorySubscription.unsubscribe();
    this.priceVendorSubscription.unsubscribe();
  }

  ngOnInit(): void {}
}

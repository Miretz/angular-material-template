import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../core/services/products.service';
import { Product } from '../core/models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'name',
    'vendor',
    'description',
    'unitPrice',
    'category',
    'ratingStars',
  ];
  dataSource = new MatTableDataSource<Product>();
  serviceSubscription: Subscription;

  constructor(private productsService: ProductService) {
    this.serviceSubscription = this.productsService
      .getProducts()
      .subscribe((products: Product[]) => {
        this.dataSource.data = products;
      });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }

  applyFilter(filterInput: string): void {
    if (filterInput) {
      this.dataSource.filter = filterInput.trim().toLowerCase();
    }
  }
}

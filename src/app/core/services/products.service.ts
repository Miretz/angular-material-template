import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product, PRODUCTS_MOCK } from '../models/product';

export type SortDirection = 'asc' | 'desc';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS_MOCK);
  }
}

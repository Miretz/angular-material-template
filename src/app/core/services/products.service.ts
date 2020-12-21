import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product, PRODUCTS_MOCK } from '../models/product';

export type SortDirection = 'asc' | 'desc';

export type ProductKey = keyof Product;

export interface ValueCount {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAll(): Observable<Product[]> {
    return of(PRODUCTS_MOCK);
  }

  /** Calculate counts the by specified key */
  getCounts(key: ProductKey, sort: boolean): Observable<ValueCount[]> {
    const products = PRODUCTS_MOCK;
    const map = new Map<string, number>();
    products.forEach((p) => {
      const objectValue: string = '' + p[key];
      const countInMap = map.get(objectValue) || 0;
      map.set(objectValue, countInMap + 1);
    });

    const data: ValueCount[] = this.mapToValueCounts(map, sort);
    return of(data);
  }

  /** Calculate the sum of values of key1 and group by key2 */
  getSum(
    key1: ProductKey,
    key2: ProductKey,
    sort: boolean
  ): Observable<ValueCount[]> {
    const products = PRODUCTS_MOCK;
    const map = new Map<string, number>();
    products.forEach((p) => {
      const objectValue: string = '' + p[key2];
      const valueToSum: number = +p[key1];
      const sumInMap = map.get(objectValue) || 0;
      map.set(objectValue, sumInMap + valueToSum);
    });

    const data: ValueCount[] = this.mapToValueCounts(map, sort);
    return of(data);
  }

  private mapToValueCounts(
    map: Map<string, number>,
    sort: boolean
  ): ValueCount[] {
    const counts: ValueCount[] = [...map.entries()].map(
      ([name, value]: [string, number]) => {
        return { name, value };
      }
    );
    if (sort) {
      return counts.sort((e1, e2) => e2.value - e1.value);
    }
    return counts;
  }
}

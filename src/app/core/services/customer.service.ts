import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Customer, CUSTOMERS_MOCK } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  getAll(): Observable<Customer[]> {
    return of(CUSTOMERS_MOCK);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../core/models/customer';
import { CustomerService } from '../core/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnDestroy {
  serviceSubscription: Subscription;
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
    this.serviceSubscription = this.customerService
      .getAll()
      .subscribe((results: Customer[]) => {
        this.customers = results;
      });
  }
  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }
}

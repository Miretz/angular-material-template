import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent {
  @Input() customer!: Customer;
}

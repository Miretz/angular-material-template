import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

@NgModule({
  declarations: [CustomersComponent, CustomerProfileComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class CustomersModule {}

import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer.model';
import {AddcustomerService} from './addcustomer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer=new Customer();
  constructor(private router: Router, private AddcustomerService: AddcustomerService) {
  }

  ngOnInit() {
  }
  createCustomer(): void {
    this.AddcustomerService.createCustomer(this.customer)
        .subscribe( data => {
          alert("customer created successfully.");
        });
  
  };

}

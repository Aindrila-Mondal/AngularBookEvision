import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import{AddUserService} from './add-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User=new User();
  constructor(private router: Router, private AddUserService: AddUserService) {
  }

  ngOnInit() {
  }
  createUser(): void {
    this.AddUserService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });
  
  };

  updateUser(): void {
    console.log(" ##### edit "+ this.user.adminId);
    this.AddUserService.updateUser(this.user)
        .subscribe( data => {
          alert("User updated successfully.");
        });
  
  };
  

}

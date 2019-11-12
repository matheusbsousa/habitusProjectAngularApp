import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-form/shared/Service/user.service';
import {User} from '../user-form/shared/entity/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }



}

import { Component, OnInit } from '@angular/core';
import {User} from './shared/entity/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public userModel: User;

  constructor() { }

  ngOnInit() {
    this.userModel = new User();
  }

  onSubmit(){

  }

  // TODO: Remove this when we're done
//   get diagnostic() { return JSON.stringify(); }
// }

}

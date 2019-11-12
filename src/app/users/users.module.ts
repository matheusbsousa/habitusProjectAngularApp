import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import {UserRouterModule} from './userRouting.module';
import {UserService} from './user-form/shared/Service/user.service';
import {HttpClientModule, HttpHandler} from '@angular/common/http';



@NgModule({
  declarations: [UserFormComponent, UsersComponent],
  exports: [
    UserFormComponent, UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRouterModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UsersModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserFormComponent} from './user-form/user-form.component';
import {UsersComponent} from './users/users.component';

const userRoutes: Routes = [
  {path: 'users/new', component: UserFormComponent}
];


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class UserRouterModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserFormComponent} from './users/user-form/user-form.component';
import {UsersComponent} from './users/users/users.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users.component';
import { UserManageComponent } from './users-manage/user-manage.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    { path: 'user-profile', component: UserProfileComponent }, 
    { path: 'user-manage',  component:UserManageComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
    UsersComponent,
    UserProfileComponent,
    UserManageComponent
];

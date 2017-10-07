import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {UsersComponent} from './users.component'
import {AddNewUserComponent} from './add-new-user.component'
import {IndividualUserComponent} from './individualUser.component'


export const UserRoute: Routes=[
{path: 'users/allUsers' , component: UsersComponent},
{path: 'users/allUsers/addUser' , component: AddNewUserComponent},
{path: 'users/allUsers/getIndividualUser' , component: IndividualUserComponent},
{path: '', redirectTo: 'users/allUsers' , pathMatch: 'full'}

]

@NgModule({
  imports: [
  RouterModule.forChild(UserRoute)
  ],
  exports: [
  RouterModule
  ]
})
export class UsersRoutingModule {}
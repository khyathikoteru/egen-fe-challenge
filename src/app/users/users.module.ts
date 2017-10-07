import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule,Routes} from '@angular/router';
import {UsersRoutingModule} from './users.routing.module';
import {AddNewUserComponent } from './add-new-user.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {IndividualUserComponent} from './individualUser.component'


@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    UsersRoutingModule
  ],
	exports:[
	RouterModule
	],
  declarations: [UsersComponent,AddNewUserComponent,IndividualUserComponent]
})
export class UsersModule { }

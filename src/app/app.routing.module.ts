import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from 'app/app.component';

export const appRoute: Routes=[
{path: 'users/allUsers' ,loadChildren: 'app/users/users.module#UsersModule'}


]

@NgModule({
  imports: [
  RouterModule.forRoot(appRoute)
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule {}
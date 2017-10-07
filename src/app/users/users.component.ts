import { Component, OnInit  } from '@angular/core';
import { NgForm,FormBuilder} from '@angular/forms'
import {Observable} from 'rxjs/Observable'
import {Http,Response,RequestOptions,Headers} from '@angular/http'
import {Router} from '@angular/router'

import {IUsers} from './users.interface'


import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: IUsers[]
	private _allUsersURL="http://mocker.egen.io/users/"

  constructor(private _http: Http,private route:Router) { }

  ngOnInit() {
  	this._http.get(this._allUsersURL).
  	map((response:Response)=><IUsers[]>response.json()).do(data=>console.log(this.users=(data)))
  	.subscribe()

  }


  getUserById(id : any){
    console.log(id , "id")
   //this.route.navigate(['getIndividualUser'])
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators ,FormGroup} from '@angular/forms'
import {Http,Response,RequestOptions,Headers} from '@angular/http'
import {Router} from '@angular/router'

import {Users} from './user.model'
import {Address} from './users.address.model'
import {Company} from './users.company.model'



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  userObj:Users
  companyObj:Company
  addressObj:Address
  private _postUserURL="http://mocker.egen.io/users"

  constructor(private _http: Http,private route:Router) { }


  ngOnInit() {
  }

addNewUser(formData: any)
{
	this.companyObj= new Company(formData.companyName,'')
	this.addressObj= new Address(formData.streetAddress,formData.city,
		formData.zip,formData.country,'')
	this.userObj= new Users('',formData.firstName,formData.lastName,formData.email,
		this.addressObj,'',this.companyObj,'')
	this._http.post(this._postUserURL,this.userObj).map(
			res => 		   		
			{
				if (res.status == 200 || res.status == 201  ) {
					location.reload()
					this.route.navigate(['users/allUsers'])
				}
			}
			).subscribe()
	console.log(JSON.stringify(this.userObj), "Form data ")
}
}

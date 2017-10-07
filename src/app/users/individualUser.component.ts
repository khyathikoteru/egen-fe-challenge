import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators ,FormGroup} from '@angular/forms'
import {Http,Response,RequestOptions,Headers} from '@angular/http'
import {ActivatedRoute,Router} from '@angular/router'
import {IUsers} from './users.interface'
import {Address} from './users.address.model'
import {Company} from './users.company.model'



@Component({
  templateUrl: './individualUser.html',
  //styleUrls: ['./add-new-user.component.css']
})
export class IndividualUserComponent implements OnInit {

	id: any
	indivUser: IUsers
	private _getInidividualUserURL="http://mocker.egen.io/users/"
  constructor(private route: ActivatedRoute,private _http: Http,private router:Router) { }


  ngOnInit() {
  	this.route.params.subscribe(params =>
  	 {
    this.id = params['id']
    this.getIndividualUserDetails(this.id)
})

  	
  }

  getIndividualUserDetails(id :any){
  		this._http.get(this._getInidividualUserURL+id).
  	map((response:Response)=><IUsers>response.json()).
  	do(data=>console.log(this.indivUser=(data)))
  	.subscribe()
  	}

  	delete(){
  		console.log("delete triggered !!")
  		this._http.delete(this._getInidividualUserURL+this.id).map(res => 		   		
			{
				if (res.status == 200 || res.status == 201  ) {
					location.reload()
					this.router.navigate(['users/allUsers'])
				}
			}
			).subscribe()
  	}
}

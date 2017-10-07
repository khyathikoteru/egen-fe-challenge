import {Address} from './users.address.model'
import {Company} from './users.company.model'
export class Users{

	id: any
    firstName: string
    lastName:string
    email:string
    address: Address
    dateCreated: any
    company: Company
    profilePic:string

    constructor(id:any,firstName:string,lastName:string,email:string,address:Address,
    	dateCreated:any,company:Company,profilePic:string){
    	this.id=id
    	this.firstName=firstName
    	this.lastName=lastName
    	this.email=email
    	this.address=address
    	this.dateCreated=dateCreated
    	this.company=company
    	this.profilePic=profilePic
    }

}
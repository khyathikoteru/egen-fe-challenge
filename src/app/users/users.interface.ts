import {IUserAddress} from './users.address.interface'
import {IUserCompany} from './users.interface.company'
export interface IUsers{

	id: any
    firstName: string
    lastName:string
    email:string
    address: IUserAddress
    dateCreated: any
    company: IUserCompany
    profilePic:string



}
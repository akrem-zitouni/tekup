import { Injectable } from '@angular/core';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private user;
  private tokenDatabase;
  private token;
  private isAuthenticated = false;
  private Authenticated;
  private users: Array<User> = [
    {"username":"admin" , "password":"admin" , "role":"admin"},
    {"username":"akrem" , "password":"akrem" , "role":"admin"},
    {"username":"nizar" , "password":"nizar" , "role":"abonne"},
    {"username":"nouredine" , "password":"nouredine" , "role":"abonne"},
  ]


  constructor(){

  }




  Authenticate(user:string,password:string){
  let userFounded =  this.users.find((u)=>
      u.username === user && u.password === password
  )
  if(userFounded !== undefined){
    this.saveUser(userFounded)
    return true;
  }
  return false
}




  saveUser(user:User){
      localStorage.setItem('authToken',btoa(JSON.stringify(user)))

  }




  loadUser(){
    let user = localStorage.getItem('authToken');
    if(user!= null){
        return JSON.parse(atob(user))
    }
    else{
        return null
    }
  }


  getToken(){
    return localStorage.getItem('authToken');

  }


  Deconnect(){

    localStorage.removeItem('authToken')
    localStorage.removeItem('favorite')


  }

  isAdmin(){
    let user = this.loadUser();
        if(user !== null){
          return user.role.toUpperCase()  === "ADMIN"?true:false;

        }

  }

  isAbooned(){
    let user = this.loadUser();
    if(user !== null){
      return user.role.toUpperCase()  === "ABONNE"?true:false;

    }
  }











}

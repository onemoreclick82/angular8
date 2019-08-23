import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public afauth:AngularFireAuth, public router:Router) { }


  createuser(email:string,password:string){
  return this.afauth.auth.createUserWithEmailAndPassword(email,password).then(
  res=>{
  res.user.updateProfile({
  displayName: email  
  })
  this.router.navigate(['login']);  
  }
  ).catch(
  err=>{
  console.log("something went wrong "+ err);  
  }  
  )
  }

  
  loginuser(email:string,password:string){
    return this.afauth.auth.signInWithEmailAndPassword(email,password).then(
    res=>{
    console.log("log res " + res);
    this.router.navigate(["/"]);  
    }
    ).catch(
    err=>{
    console.log("something went wrong "+ err);  
    }  
    )
    }


  



}

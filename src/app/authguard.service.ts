import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, CanActivate  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate  {

  user: firebase.User;

  constructor(private afauth:AngularFireAuth, private router:Router) { 
  this.afauth.authState.subscribe(x=>{ this.user = x});
  }


  canActivate(){
  if(!this.user){
    this.router.navigate(['/login']);
    return false;
    }
  else{
    return true;
  }

  }



}

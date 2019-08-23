import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: firebase.User;

  constructor(private eauth:AngularFireAuth) {
  this.eauth.authState.subscribe(x=> {this.user = x}
  );
  }


  logout(){
  this.eauth.auth.signOut();
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

constructor(private eauth:AuthService  ) { }
 username:string;
 password:string;


  signup(){
    this.eauth.createuser(this.username,this.password);
    this.username = " ";
    this.password = " ";
  }


  ngOnInit() {
  }

}

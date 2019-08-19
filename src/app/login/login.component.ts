import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

constructor(private eauth:AuthService) { }

username:string;
password:string;

login(){
this.eauth.loginuser(this.username,this.password);  
}

  ngOnInit() {
  }

}

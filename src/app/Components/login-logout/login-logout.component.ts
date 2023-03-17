import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/Services/login-logout.service';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.scss']
})
export class LoginLogoutComponent implements OnInit {
isAuth:boolean=false;
  constructor(private logInOutService:LoginLogoutService){

  }
  ngOnInit(): void {
this.isAuth=this.logInOutService.isAuth
}


login(email:string,password:string){
  this.logInOutService.login(email,password)
  this.isAuth=this.logInOutService.isAuth
  
}
logOut(){
  this.logInOutService.logOut()
  this.isAuth=this.logInOutService.isAuth
}



}

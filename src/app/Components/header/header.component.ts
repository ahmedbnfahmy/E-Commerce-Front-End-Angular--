import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/Services/login-logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  isAuth:boolean = false
  constructor( private authService:LoginLogoutService){}
  ngOnInit(): void {
// this.isAuth=this.authService.isAuth
this.authService.isUserAuthStatus().subscribe(
  status=>{
    this.isAuth=status;

  }
)
  }


}

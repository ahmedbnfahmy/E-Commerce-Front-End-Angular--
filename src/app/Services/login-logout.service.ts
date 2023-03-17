import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {

  isAuthedSubject:BehaviorSubject<boolean>
  constructor() {

    this.isAuthedSubject=new BehaviorSubject<boolean>(false)
   }

  login (email:string,password:string){
// call api and give him E & pass to give you token to login

let tokin ='1215465464'
localStorage.setItem('token',tokin)
this.isAuthedSubject.next(true)
}

logOut(){
  
  localStorage.removeItem('token')
  this.isAuthedSubject.next(false)

}

get isAuth():boolean
{   // get here is to transForm () to property and access by get 
return (localStorage.getItem('token'))?true:false
}

isUserAuthStatus():Observable<boolean>{
  return this.isAuthedSubject.asObservable()
}

}

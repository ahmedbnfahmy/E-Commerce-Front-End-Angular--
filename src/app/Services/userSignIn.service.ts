import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSignIn } from '../Models/user-sign-in';

@Injectable({
  providedIn: 'root'
})
export class UserSignInService {
  private httpOptions={}
  apiLink:string='http://localhost:3000'
constructor(private httpClient:HttpClient) { 

  this.httpOptions={
    headers:new HttpHeaders({'content-type':'application/json'})
  }
}
userSignInAPI(user:UserSignIn):Observable<UserSignIn>{
  console.log(environment);
  return this.httpClient.post<UserSignIn>(`${this.apiLink}/userdata`,JSON.stringify(user),this.httpOptions) // one specific thing so  we use params 

}
}

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { EnvironmentProviders, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icategory } from '../Models/icategory';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private httpOptions={}
  api:string='http://localhost:3000'
    constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({'content-type':'application/json'})
    }
  }

getCatList():Observable<Icategory[]>{ // this return observaple
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/categories')
    return this.httpClient.get<Icategory[]>(`${this.api}/categories`)
  }
  
getAllProducts():Observable<Iproduct[]>{ // this return observaple
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/categories')
    return this.httpClient.get<Iproduct[]>(`${this.api}/products`)
  }
getProductsByCategoryID(catID:number):Observable<Iproduct[]>{
  return this.httpClient.get<Iproduct[]>(`${this.api}/products?catID=${catID}`)// this query string
   // two ways to send parameter to api  param  for specific one thing| query string to search about many things
}
getProductByID(pID:number):Observable<Iproduct>{
  return this.httpClient.get<Iproduct>(`${this.api}/products/${pID}`) // one specific thing so  we use params 
}


addNewPrdAPI(prd:Iproduct):Observable<Iproduct>{
  return this.httpClient.post<Iproduct>(`${this.api}/products`,JSON.stringify(prd),this.httpOptions) // one specific thing so  we use params 
}

// deleteNewPrdAPI(prd:Iproduct):Observable<Iproduct>{
  // return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/products/${pID}`,JSON.stringify(prd),this.httpOptions) // one specific thing so  we use params 
// }
deleteNewPrdAPI(id: number): Observable<Iproduct> {
   // DELETE api/heroes/42
  return this.httpClient.delete<Iproduct>(`${this.api}/products/${id}`,this.httpOptions)
    ;
}
// PUT: update the hero on the server. Returns the updated hero upon success. */
 updatePrdAPI(id: number,body:any): Observable<Iproduct> {
  return this.httpClient.put<Iproduct>(`${this.api}/products/${id}`,body,this.httpOptions)
    
}
}

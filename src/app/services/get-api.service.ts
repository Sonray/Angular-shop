import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  
  constructor(private http : HttpClient) { }

  getProduct():Observable<any>{
      return this.http.get("https://hood9000.herokuapp.com/api/products/all/")
  }

  // getProductbyID(id):Observable<any>{

  //   let parameter = new HttpParams().set('id', id);
  //   return this.http.get("/api/products/",{params:parameter})

  // }
}

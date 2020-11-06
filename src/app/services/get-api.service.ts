import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  
  constructor(private http : HttpClient) { }

  getProduct():Observable<any>{
      return this.http.get("/api/products/all/")
  }
}

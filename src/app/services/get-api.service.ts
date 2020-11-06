import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private httpclient : HttpClient) { }

  getProduct():Observable<any>{
      return this.httpclient.get("https://hood9000.herokuapp.com/api/products/all/")
  }
}

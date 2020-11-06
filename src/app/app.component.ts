import { Component } from '@angular/core';

import { GetAPIService } from './services/get-api.service'
import { Productcomponents } from './classes/productcomponents'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheShop';

  constructor( private _GetAPIService: GetAPIService){}

  productlist: Productcomponents[];

  ngOnInit(){
    this._GetAPIService.getProduct().subscribe(
      data=>{
          this.productlist=data;
      }
    );
  }
}

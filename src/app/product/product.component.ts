import { Component, OnInit } from '@angular/core';

import { GetAPIService } from '../services/get-api.service'
import { Productcomponents } from '../classes/productcomponents'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  constructor( private _GetAPIService: GetAPIService){}

  productlist: Productcomponents[];

  ngOnInit(){
    // this._GetAPIService.getProductbyID(id).subscribe(
    //   data=>{
    //       this.productlist=data;
    //   }
    // );
  }

}

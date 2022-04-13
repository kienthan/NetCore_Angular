import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  id: number = 0;
  Products: any[] = [];
  ProductsDetail: any[] = [];
  page: number = 1;

  constructor(private activeRoute: ActivatedRoute, private Api: ApiService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id);
      //-----------------------------
      this.Products = this.Api.Product;
      //Fitler Arraylist

      this.ProductsDetail = this.Products.filter(item => {
        return this.id == item.sanPhamId;
      });
      console.log(this.ProductsDetail);
    })
  }

}

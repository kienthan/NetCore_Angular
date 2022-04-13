import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css']
})
export class CategoryproductComponent implements OnInit {

  id: number = 0;
  Products: any[] = [];
  listProductCategory: any[] = [];
  page: number = 1;

  constructor(private activeRoute: ActivatedRoute, private Api: ApiService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params["id"];

      //-----------------------------
      this.Products = this.Api.Product;
      //Fitler Arraylist

      this.listProductCategory = this.Products.filter(item => {
        return this.id == item.typeSanPhamId;
      });
      console.log(this.listProductCategory)
    })
  }

}

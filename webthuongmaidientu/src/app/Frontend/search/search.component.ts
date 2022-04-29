import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: string = '';
  Products: any[] = [];
  productList: any[] = [];

  constructor(private activeRoute: ActivatedRoute, private Api: ApiService) { }

  ngOnInit(): void {
    this.Products = this.Api.Product;
    this.activeRoute.params.subscribe(params => {
      this.name = params["name"];
      // ------------
      this.productList = this.Products.filter(item => {
        return item.sanPhamName.includes(this.name[0].toUpperCase() + this.name.slice(1))
      });
    }
    )
  }

}

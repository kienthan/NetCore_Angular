import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';
import { ToastrService } from 'ngx-toastr';

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
  size: string = "";
  // ------------
  countPro: number = 1;

  constructor(private activeRoute: ActivatedRoute, private Api: ApiService, private cart: CartService, private toastr: ToastrService, private router: Router) { }

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

  increase() {
    this.ProductsDetail[0].soLuong !== 10 ? this.ProductsDetail[0].soLuong++ : this.ProductsDetail[0].soLuong = 10
  }

  decrease() {
    this.ProductsDetail[0].soLuong !== 1 ? this.ProductsDetail[0].soLuong-- : this.ProductsDetail[0].soLuong = 1
  }

  onClick() {
    this.cart.addtoCart(this.ProductsDetail[0]);
    if (this.cart.check === "tontai") {

      this.toastr.warning('Thông báo', 'Sản phẩm đã có trong giỏ hàng');
    }
    this.router.navigate(['/cart'])
  }

}

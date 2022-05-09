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
  changeImg: string = "";
  // ------------
  countPro: number = 1;

  constructor(private activeRoute: ActivatedRoute, private Api: ApiService, private cart: CartService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.activeRoute.params.subscribe(params => {
      this.id = params["id"];
      //-----------------------------
      this.Products = this.Api.Product;
      //Fitler Arraylist

      this.ProductsDetail = this.Products.filter(item => {
        return this.id == item.sanPhamId;
      });
    })
    this.changeImg = this.ProductsDetail[0].mainImg;
  }

  increase() {
    this.ProductsDetail[0].soLuong !== 10 ? this.ProductsDetail[0].soLuong++ : this.ProductsDetail[0].soLuong = 10
  }

  decrease() {
    this.ProductsDetail[0].soLuong !== 1 ? this.ProductsDetail[0].soLuong-- : this.ProductsDetail[0].soLuong = 1
  }

  onClick() {
    this.cart.addtoCart(this.ProductsDetail[0]);
    this.cart.check === "tontai" ? this.toastr.warning('Thông báo', 'Sản phẩm đã có trong giỏ hàng') : this.toastr.success('Thông báo', 'Sản phẩm đã được thêm giỏ hàng');
    //this.router.navigate(['/cart'])
  }
  buyNow() {
    this.cart.addtoCart(this.ProductsDetail[0]);
    this.router.navigate(['/cart'])
  }


  onClickImage(urlImg: string) {
    this.changeImg = urlImg
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormArrayName, FormControl, FormGroup } from '@angular/forms';

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
  listSize: any[] = [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
    { id: 4, size: "XL" },
    { id: 5, size: "XXL" },
  ];
  form !: FormGroup;

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
    // console.log(this.ProductsDetail[0].size)
    console.log(this.ProductsDetail[0].size)
  }
  buyNow() {
    this.cart.addtoCart(this.ProductsDetail[0]);
    this.router.navigate(['/payment'])

  }


  onClickImage(urlImg: string) {
    this.changeImg = urlImg
  }

  changeSize(size: string) {
    this.ProductsDetail[0].size = size;
    console.log(this.size)
  }
}
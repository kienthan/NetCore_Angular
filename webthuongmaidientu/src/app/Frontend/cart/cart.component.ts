import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: any[] = [];
  total: number = 0;
  lengthcart: number = 0;
  stringTotal: string = "";

  constructor(private cart: CartService, private toatr: ToastrService) { }

  ngOnInit(): void {

    this.cart.getProducts().subscribe(item => {
      this.cartList = item;
    })
    this.total = this.cart.getTotalPrice();
    this.lengthcart = this.cartList.length;
    this.stringTotal = this.total.toLocaleString()
    this.cart.cartLength = this.lengthcart;
  }

  decrease(product: any) {
    this.cart.decrease(product);
    this.total = this.cart.getTotalPrice();
    this.stringTotal = this.total.toLocaleString()
    this.cart.cartLength = this.lengthcart;
  }

  increase(product: any) {
    this.cart.increase(product);
    this.total = this.cart.getTotalPrice();
    this.stringTotal = this.total.toLocaleString()
    this.cart.cartLength = this.lengthcart;
  }

  deleteClick(product: any) {
    this.cart.removeCartItem(product);
    this.toatr.success("Thông báo", "Đã xoá sản phẩm trong giỏ hàng " + product.sanPhamName);
    this.total = this.cart.getTotalPrice();
    this.stringTotal = this.total.toLocaleString();
    this.cart.cartLength = this.lengthcart;
  }


}

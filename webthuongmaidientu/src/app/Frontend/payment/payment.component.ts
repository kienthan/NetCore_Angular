import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  soluong: number = 0;

  cartList: any[] = [];
  total: any = 0;

  constructor(private cart: CartService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(item => {
      this.cartList = item;
    })
    this.soluong = this.cartList.length;
    this.total = this.cart.getTotalPrice().toLocaleString();
    //this.total.toPrecision
  }

  onClickPayment() {
    if (this.soluong !== 0) {
      this.cart.removeAllCart();
      this.total = this.cart.getTotalPrice().toLocaleString();
      this.soluong = this.cartList.length;
      window.location.href = "/";
      // this.router.navigate(["/"]);
      this.toast.success("Đặt hàng thành công", "Thông báo", { timeOut: 3000, positionClass: 'toast-top-center' });
    }
    else {
      this.toast.warning("Đặt hàng thất bại, giỏ hàng trống", "Thông báo", { timeOut: 3000, positionClass: 'toast-top-center' });
    }
  }

}

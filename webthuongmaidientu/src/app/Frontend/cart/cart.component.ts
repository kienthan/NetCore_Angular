import { Component, OnInit } from '@angular/core';
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

  constructor(private cart: CartService) { }

  ngOnInit(): void {

    this.cart.getProducts().subscribe(item => {
      this.cartList = item;
      console.log(this.cartList)
    })
    this.total = this.cart.getTotalPrice();
    this.lengthcart = this.cartList.length;
    this.stringTotal = this.total.toLocaleString()
  }

  decrease(product: any) {
    console.log(product)
    this.cart.decrease(product);
    this.total = this.cart.getTotalPrice();
    this.stringTotal = this.total.toLocaleString()
  }

  increase(product: any) {
    this.cart.increase(product);
    this.total = this.cart.getTotalPrice();
    this.stringTotal = this.total.toLocaleString()
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemlist: any[] = [];
  public productList = new BehaviorSubject<any>([]);
  public grandTotal: number = 0;
  public check: string = ""

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemlist.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    const check = this.cartItemlist.every(item => {
      return item.sanPhamId !== product.sanPhamId;
    })
    if (check) {
      this.cartItemlist.push(product);
      this.productList.next(this.cartItemlist);
      this.getTotalPrice();

    }
    else {
      this.check = "tontai";
    }
  }

  decrease(product: any) {
    this.cartItemlist.forEach(item => {
      if (item.sanPhamId === product.sanPhamId) {
        item.soLuong === 1 ? item.soLuong === 1 : item.soLuong--;
      }
    })
    this.getTotalPrice();
  }

  increase(product: any) {
    this.cartItemlist.forEach(item => {
      if (item.sanPhamId === product.sanPhamId) {
        item.soLuong === 10 ? item.soLuong === 10 : item.soLuong++;
      }
    })
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    // this.cartItemlist.map((a: any) => {
    //   grandTotal += (a.price * a.count);
    // })

    const res = this.cartItemlist.reduce((prev, item) => {
      return prev + (item.sanPhamPrice * item.soLuong);
    }, 0)
    this.grandTotal = res;
    return this.grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemlist.map((a: any, index: any) => {
      if (product.mamh === a.mamh) {
        this.cartItemlist.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemlist);
    this.getTotalPrice();
  }
  removeAllCart() {
    this.cartItemlist = [];
    this.productList.next(this.cartItemlist);
    this.getTotalPrice();
  }
}

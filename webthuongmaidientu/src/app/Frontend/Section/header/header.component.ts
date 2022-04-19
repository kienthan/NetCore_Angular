import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartList: any[] = [];
  cartLength: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {

  }


}

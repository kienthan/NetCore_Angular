import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: any[] = [];
  constructor() { }

  ngOnInit(): void {


    this.Products = [
      {
        id: "41",
        name: "Túi Mini Nebulus",
        price: "300000",
        img: "../assets/img/bag1.jpg"
      },
      {
        id: "43",
        name: "Túi Mini Crossbag",
        price: "280000",
        img: "../assets/img/a1.jpg"
      },
      {
        id: "45",
        name: "Balo chống nước Kyt",
        price: "95000",
        img: "../assets/img/a6.jpg"
      },
      {
        id: "46",
        name: "Balo Adidas Ops 30L",
        price: "650000",
        img: "../assets/img/b1.jpg"
      },
      {
        id: "47",
        name: "Mũ Cappie",
        price: "95000",
        img: "../assets/img/b6.jpg"
      },
      {
        id: "48",
        name: "	Mũ Bucket MLB",
        price: "1290000",
        img: "../assets/img/c1.jpg"
      }
    ]
  }

}
// 












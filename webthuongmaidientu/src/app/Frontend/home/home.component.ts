import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: any[] = [];
  Products1: any[] = [];

  page: number = 1;
  constructor(private Api: ApiService) { }

  ngOnInit(): void {
    // this.Api.getProduct().subscribe(res => {
    //   this.Products1 = res
    //   console.log(this.Products1)
    // })
    this.Products = this.Api.Product


  }

}
//












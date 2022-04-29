import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formSearch: FormGroup | any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.router.navigate(["/search/" + this.formSearch.value.search])
  }
}

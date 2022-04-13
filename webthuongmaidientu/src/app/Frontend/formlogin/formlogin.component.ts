import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

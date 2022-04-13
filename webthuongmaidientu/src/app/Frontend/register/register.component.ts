import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      cpassword: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Frontend/cart/cart.component';
import { CategoryproductComponent } from './Frontend/categoryproduct/categoryproduct.component';
import { FormloginComponent } from './Frontend/formlogin/formlogin.component';
import { HomeComponent } from './Frontend/home/home.component';
import { PaymentComponent } from './Frontend/payment/payment.component';
import { ProductdetailComponent } from './Frontend/productdetail/productdetail.component';
import { RegisterComponent } from './Frontend/register/register.component';
import { SearchComponent } from './Frontend/search/search.component';

const routes: Routes = [
  { path: "login", component: FormloginComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "category/:id", component: CategoryproductComponent },
  { path: "product/:id", component: ProductdetailComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PaymentComponent },
  { path: "search/:name", component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

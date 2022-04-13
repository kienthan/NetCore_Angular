import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormloginComponent } from './Frontend/formlogin/formlogin.component';
import { HomeComponent } from './Frontend/home/home.component';
import { RegisterComponent } from './Frontend/register/register.component';

const routes: Routes = [
  { path: "login", component: FormloginComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

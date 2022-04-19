import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Frontend/Section//footer/footer.component';
import { HeaderComponent } from './Frontend/Section/header/header.component';
import { ServicesComponent } from './Frontend/Section/services/services.component';
import { FormloginComponent } from './Frontend/formlogin/formlogin.component';
import { HeadercarouselComponent } from './Frontend/Section/headercarousel/headercarousel.component';
import { HomeComponent } from './Frontend/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Frontend/register/register.component';
import { CategoryproductComponent } from './Frontend/categoryproduct/categoryproduct.component';
import { ProductdetailComponent } from './Frontend/productdetail/productdetail.component';
import { CartComponent } from './Frontend/cart/cart.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    FormloginComponent,
    HeadercarouselComponent,
    HomeComponent,
    RegisterComponent,
    CategoryproductComponent,
    ProductdetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

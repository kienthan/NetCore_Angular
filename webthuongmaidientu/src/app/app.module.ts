import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    FormloginComponent,
    HeadercarouselComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

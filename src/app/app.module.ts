import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { MatInputModule, MatCardModule, MatButtonModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ErrorComponent } from './error/error.component';
import { MyProductComponent } from './my-product/my-product.component';
import { CategoryComponent } from './category/category.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ProductComponent,
    LoginComponent,
    VendorComponent,
    VendorsignupComponent,
    AboutusComponent,
    AddProductComponent,
    ProductsDetailComponent,
    ErrorComponent,
    MyProductComponent,
    CategoryComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

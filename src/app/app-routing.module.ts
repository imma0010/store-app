import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorComponent } from './error/error.component';
import { MyProductComponent } from './my-product/my-product.component';
import { CategoryComponent } from './category/category.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: ProductComponent},
    {path: 'signup', component: SignupComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'vendor', component: VendorComponent, pathMatch: 'full'},
    {path: 'vendorsignup', component: VendorsignupComponent, pathMatch: 'full'},
    {path: 'aboutus', component: AboutusComponent, pathMatch: 'full'},
    {path: 'add-product', component: AddProductComponent, pathMatch: 'full'},
    {path: 'my-product', component: MyProductComponent, pathMatch: 'full'},
    {path: 'error', component: ErrorComponent, pathMatch: 'full'},
    {path: 'categories', component: CategoryComponent, pathMatch: 'full'},
    {path: 'editproducts/:id', component: EditProductComponent, pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

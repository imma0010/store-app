import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: ProductComponent},
    {path: 'signup', component: SignupComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'vendor', component: VendorComponent, pathMatch: 'full'},
    {path: 'vendorsignup', component: VendorsignupComponent, pathMatch: 'full'},
    {path: 'aboutus', component: AboutusComponent, pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

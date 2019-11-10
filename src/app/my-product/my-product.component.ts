import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {

  products: any;
  id: number;

  constructor(private http: HttpClient, private role: RoleService, private route: Router) { }

  ngOnInit() {
    this.http.get('http://localhost:1337/myproducts', {
      headers: {'Authorization': localStorage.getItem('token')}
    }).subscribe(
          data => {
            console.log('data',data);
            this.products = data;
          }, err => {
            console.log(err);
          }
        )
  }

  addProduct() {
    this.route.navigate(['add-product']);
  }

  edit(id) {
    this.route.navigate([[`editproducts/${id}`]]);
  }

}

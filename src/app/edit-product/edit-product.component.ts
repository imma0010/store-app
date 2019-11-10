import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id = '';
  product: any;

  productForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    category_id: ['', Validators.required],
  });

  constructor(private http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:1337/product/' + this.id).subscribe(
      product => {
        this.product = product;
        this.productForm.controls['name'].setValue(product['name']);
        this.productForm.controls['price'].setValue(product['price']);
        this.productForm.controls['description'].setValue(product['description']);
        this.productForm.controls['category_id'].setValue(product['category_id']);
      }
    );
  }

  onUploadProduct() {
    this.http.post('http://localhost:1337/products', this.productForm.value)
      .subscribe(result => {
        console.log(result)
      });
    }
}
